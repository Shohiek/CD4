<?php
if (!defined('BASEPATH'))exit('No direct script access allowed');

class tests_cd4 extends MY_Controller {

	public function index(){

		$this->home_page();
	}

	public function home_page() {
		$this->login_reroute(array(4));
		$data['content_view'] = "nacp/nacp_tests_view";
		$data['title'] = "CD4 Tests";
		$data['sidebar']	= "nacp/nacp_sidebar_view";
		$data['filter']	=	true;
		$data	= 	array_merge($data,$this->load_libraries(array('dataTables','poc_tests')));
		
		$this->load->model('nacp_model');
		$this->load->model('tests_model');

		$data['devices_not_reported'] = $this->nacp_model->devices_not_reported();
		
		$data['errors_agg'] = $this->nacp_model->errors_reported();

		$data['menus']	= 	$this->nacp_model->menus(8);
		$data['tests'] = 	$this->tests_model->get_tests_details($this->get_filter_start_date(),$this->get_filter_stop_date(),$this->session->userdata("user_group_id"),$this->session->userdata("user_filter_used"));

		$this -> template($data);
	}
}
/* End of file tests.php */
/* Location: ./application/modules/poc/controller/tests.php */