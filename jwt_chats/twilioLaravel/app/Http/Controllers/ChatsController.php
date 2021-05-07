<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class ChatsController extends Controller
{
    public function getContacts($id)
    {
    	$contact = User::where('id','!=',$id)->get();
    	return response()->json($contact);
    }
}
