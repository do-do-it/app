<?php
namespace app\index\controller;
use think\Db;

class Test
{
    public function add()
    {
    	$params = input('');
    	$db = Db::name('user');
    	$params['create_time'] = date('Y-m-d H:i:s', time());
    	$res = $db->insert($params);
    	var_dump($res);
    }

    public function get()
    {
    	$params = input('');
    	$db = Db::name('user');
    	$res = $db->where('id', $params['id'])->find();
    	var_dump($res);
    }

    public function index()
    {
        var_dump(CACHE_PATH);
        var_dump(RUNTIME_PATH);
    }


    public function cd()
    {
        $params = input('');
        cache('name', $params['name'], 60);
    }

    public function cg()
    {
        var_dump(cache('name'));
    }
}
