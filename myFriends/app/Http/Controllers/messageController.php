<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Message;
class messageController extends Controller
{
    public function contact($id){
        $contact = User::where('id','!=',$id)->get();
        return response()->json($contact);
    }

    public function getMessage($from,$to)
    {
        $message = Message::where('from',$from)->where('to',$to)->orWhere('from',$to)->where('to',$from)->get();
        return response()->json($message);
    }
}
