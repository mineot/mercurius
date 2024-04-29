<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LanguageAutoSelector
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $lang = $request->header('Accept-Language');
        app()->setlocale('en');

        if (strpos($lang, 'pt-BR') >= 0 || strpos($lang, 'pt') >= 0) {
            app()->setlocale('pt');
        }

        return $next($request);
    }
}
