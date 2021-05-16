<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class SearchController extends Controller
{
    public function search(Request $request){

        if(!empty($request->sear)){

            $users = User::where('id','!=',$request->from)->where('name','LIKE',$request->sear.'%')->get();
            return response()->json($users);
        }
        
    }

    public function user($id){
        $user = User::where('id',$id)->first();

        return response()->json($user);
    }
}
