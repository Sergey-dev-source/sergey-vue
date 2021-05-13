<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Message;
use App\Events\NewMessage;
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

    public function save(Request $request){
        $message = Message::create([
            'from' => $request->from,
            'to' => $request->to,
            'message' => $request->message
        ]);
        broadcast(new NewMessage($message));
        return response()->json($message);
    }
}
