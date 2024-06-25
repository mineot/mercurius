<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->uuid('id')->primary()->autoIncrement();
            $table->string('name');
            $table->string('job_title');
            $table->string('summary');
            $table->string('description');
            $table->string('photo');
            $table->string('image_card');
            $table->timestamps();

            $table
                ->foreignUuid('language')
                ->references('id')
                ->on('languages')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
