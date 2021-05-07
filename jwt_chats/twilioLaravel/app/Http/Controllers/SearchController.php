<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SearchController extends Controller
{
    public function search(Request $request)
    {

    	$name = $request->s;
    	if (empty($name)) {
    		return response()->json('');
    	}
    	$users = User::where('name','LIKE',$name.'%')
                      ->get();
    		return response()->json($users);
    	


    }
    public function user($id)
    {
    	$user = User::where('id',$id)->get();
    	return response()->json($user);
    }
}
