<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

            if (empty($request->email) || empty($request->password)){
                return response()->json(['err' => 'fill in all the fields']);
            }
            elseif (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['err' => 'E-mail or password not found ']);
            }



        return response()->json(compact('token'));
    }

    public function register(Request $request)
    {



        $v = Validator::make($request->all(), [
            'name' => 'required|string',
            'phone' => 'required',
            'avatar' => 'image|mimes:jpeg,png,jpg,gif,svg',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        if ($v->fails())
        {
            return response()->json(['message_errors'=>$v->errors()]);
        }

        $file = $request->file('avatar');
        $name ='http://127.0.0.1:8000/images/users/' . uniqid() . '.' . $file->extension();
        $file->move(public_path('images/users'), $name);


        $user = User::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'avatar' => $name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user','token'),201);
    }

    public function getAuthenticatedUser()
    {
        try {

            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }

        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent'], $e->getStatusCode());

        }

        return response()->json(compact('user'));
    }
}
