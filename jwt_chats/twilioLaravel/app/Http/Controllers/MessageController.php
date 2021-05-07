<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function getMessage($from,$to)
    {
    	$message = Message::where('from',$from)->where('to',$to)->orWhere('from',$to)->where('to',$from)->get();
    	return response()->json($message);
    }

    public function sendMessage(Request $req){
    	$message = Message::create([
    		'from'=> $req->from,
    		'to'=> $req->to,
    		'message'=> $req->messa
    	]);
    	return response()->json($message);
    }
}
