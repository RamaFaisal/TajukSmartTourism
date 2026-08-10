<?php

namespace Tests\Feature;

use Tests\TestCase;

class TestDatabaseIsolationTest extends TestCase
{
    public function test_test_suite_uses_in_memory_sqlite(): void
    {
        $this->assertSame('sqlite', config('database.default'));
        $this->assertSame(':memory:', config('database.connections.sqlite.database'));
    }
}
