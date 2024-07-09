<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Validation\ValidationException;
use Throwable;

class MessageController extends Controller {
    private function message($code, $messages = []) {
        return response()->json($messages, $code);
    }

    public function success($origin, $message = null) {
        return $this->message(200, [
            'origin' => $origin,
            'message' => $message ?? 'successfully'
        ]);
    }

    public function created($origin , $message = null) {
        return $this->message(201, [
            'origin' => $origin,
            'message' => $message ?? "created"
        ]);
    }

    public function unauthorized($origin, $message = null) {
        return $this->message(401, [
            'origin' => $origin,
            'message' => $message ?? "unauthorized"
        ]);
    }

    public function fail($origin, Throwable $throwable) {
        return $this->message(500, [
            'origin' => $origin,
            'message' => $throwable->getMessage(),
            'error' => $throwable->getTraceAsString(),
        ]);
    }

    public function validationException($origin, ValidationException $exception) {
        return $this->message(422, [
            'origin' => $origin,
            'message' => $exception->getMessage(),
        ]);
    }

    public function queryException($origin, QueryException $exception) {
        if ($exception->errorInfo[1] === 19) {
            return $this->message(409, [
                'origin' => $origin,
                'message' => 'email already exists',
                'error' => $exception->errorInfo[2],
            ]);
        }
        return $this->fail($origin, $exception);
    }
}
