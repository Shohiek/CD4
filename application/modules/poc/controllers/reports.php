<?php
if (!defined('BASEPATH'))exit('No direct script access allowed');

class reports extends MY_Controller {

	public $data 	= 	array();
	public $db_view	=	"v_pima_tests_details";

	public function __construct(){
		parent::__construct();

		$this->data['content_view'] = "poc/reports_view2";
		$this->data['title'] = "Reports";
		$this->data['sidebar']	= "poc/sidebar_view";

		$this->load->model('poc_model');
		

		$this->data['filter']	=	false;
		$this->data		=	array_merge($this->data,$this->load_libraries(array('FusionCharts','poc_reports','jqueryui','dataTables')));
		
//content for the select by criteria		
		$this->data['devices'] = $this->poc_model->db_filtered_view("v_facility_pima_details",$this->session->userdata("user_filter_used"),null,null,array("facility_name"));
		$this->data['facilities'] = $this->poc_model->db_filtered_view("v_facility_details",$this->session->userdata("user_filter_used"),null,null,array("facility_name"));
		
		//controls the menu for select criteria for selection 
		$this->data['starting_year'] = $this->config->item("starting_year");
				
		//sets the menu to the reports page

		$this->data['menus']	= 	$this->poc_model->menus(6);

		$this->load->module("charts/pima");
		$this->load->module("charts/tests");
		$this->load->module("charts/pima_errors");
	}

	public function index(){

		$this->login_reroute(array(3,8,9,6));

		$this -> template($this->data);
	}
	public function submit2($criteria){//generates the reports
		$format = (int) $this->input->post("format");//detailed or summary
		$report_type	=	(int) $this->input->post("report_type");
		if($criteria == 1){//by device and facility
			$date_from		=	date('Y-m-d',strtotime($this->input->post("datepickerFrom")));
			$date_to 		=	date('Y-m-d',strtotime($this->input->post("datepickerTo")));	
		}else if($criteria == 2){//by device
			$date_from		=	date('Y-m-d',strtotime($this->input->post("datepickerFromd")));
			$date_to 		=	date('Y-m-d',strtotime($this->input->post("datepickerTod")));
			$device			=	(int) $this->input->post("device");
		}else if($criteria == 3){//facility
			$date_from		=	date('Y-m-d',strtotime($this->input->post("datepickerFromf")));
			$date_to 		=	date('Y-m-d',strtotime($this->input->post("datepickerTof")));
			$facility		=	(int) $this->input->post("facility");
		}else{}
		
		
		if($format == 1){//detailed, EXCEL 
			ini_set("memory_limit","128M");		
						
			$user_group_id 		= 	$this->session->userdata("user_group_id");
			$user_filter_used 	=	$this->session->userdata("user_filter_used");
	
			$where_clause 	=	" AND `result_date` between '$date_from' and '$date_to' ";
	
			if ( $report_type == 1 ){
				$this->db_view = "v_pima_tests_details";
				$where_clause .= " AND `valid` = '1' ";
			}else if ($report_type==2){
				$this->db_view = "v_pima_error_details";
				$where_clause .= " AND `valid` = '0' ";
			}else{			
				$this->db_view = "v_pima_tests_details";
			}
	
			if( $criteria == 1 ){
				$where_clause 	.=	" ".$this->poc_model->sql_user_delimiter($user_group_id,$user_filter_used )." ";
			}else if( $criteria == 2 ){
				$where_clause 	.= 	" AND `facility_equipment_id`='$device' ";
			}else if( $criteria == 3 ){
				$where_clause 	.= 	" AND `facility_id`='$facility' ";
			}else{}
	
	
			$sql 			=	"SELECT * FROM `".$this->db_view."` WHERE 1";
	
			$where_clause 	.= 	" AND ( `sample_code` NOT LIKE '%CONTROL%' ) ";
	
			$sql.=$where_clause;
	
			//echo $sql;
	
			$res = R::getAll($sql);
	
			$col_data = array();
			$row_data = array();
	
			if ( $report_type == 1 ){
				$row_data[0] = array("Facility","Pima Device","Sample Code", "CD4 Count (cells/mm)", "Device Operator","Date of Result");
				foreach ($res as $key => $value) {
					$row_data[$key+1][0] 	=	$value["facility_name"]; 
					$row_data[$key+1][1] 	=	$value["equipment_serial_number"]; 
					$row_data[$key+1][2] 	=	$value["sample_code"]; 
					$row_data[$key+1][3] 	=	$value["cd4_count"]; 
					$row_data[$key+1][4] 	=	$value["operator"]; 
					$row_data[$key+1][5] 	=	Date("Y, F, d",strtotime($value["result_date"]));
				}
			}else if ($report_type==2){
				$row_data[0] = array("Facility","Pima Device","Sample Code", "Error Type", "Error Description", "Device Operator","Date of Result");
				foreach ($res as $key => $value) {
					$row_data[$key+1][0] 	=	$value["facility_name"]; 
					$row_data[$key+1][1] 	=	$value["equipment_serial_number"]; 
					$row_data[$key+1][2] 	=	$value["sample_code"]; 
					$row_data[$key+1][3] 	=	$value["error_type_description"]; 
					$row_data[$key+1][4] 	=	$value["error_detail"]; 
					$row_data[$key+1][5] 	=	$value["operator"]; 
					$row_data[$key+1][6] 	=	Date("Y, F, d",strtotime($value["result_date"]));
				}
			}else{
				$row_data[0] = array("Facility","Pima Device","Sample Code", "CD4 Count (cells/mm)", "SUCCESSFUL TESTS", "Device Operator","Date of Result");
				foreach ($res as $key => $value) {
					$row_data[$key+1][0] 	=	$value["facility_name"]; 
					$row_data[$key+1][1] 	=	$value["equipment_serial_number"]; 
					$row_data[$key+1][2] 	=	$value["sample_code"]; 
					$row_data[$key+1][3] 	=	$value["cd4_count"]; 
					$row_data[$key+1][4] 	=	$value["validity"]; 
					$row_data[$key+1][5] 	=	$value["operator"]; 
					$row_data[$key+1][6] 	=	Date("Y, F, d",strtotime($value["result_date"]));
				}
			}
	
			$worksheet["column_data"]	=	$col_data;
			$worksheet["row_data"]		=	$row_data;
	
			$this->worksheet($worksheet);
		}else if($format == 2){//pdf report
			$user_group_id 		= 	$this->session->userdata("user_group_id");
			$user_filter_used 	=	$this->session->userdata("user_filter_used");
	
			$where_clause 	=	" AND `result_date` between '$date_from' and '$date_to' ";
	
			if ( $report_type == 1 ){
				$this->db_view = "v_pima_tests_details";
				$where_clause .= " AND `valid` = '1' ";
			}else if ($report_type==2){
				$this->db_view = "v_pima_error_details";
				$where_clause .= " AND `valid` = '0' ";
			}else{			
				$this->db_view = "v_pima_tests_details";
			}
	
			if( $criteria == 1 ){
				$where_clause 	.=	" ".$this->poc_model->sql_user_delimiter($user_group_id,$user_filter_used )." ";
			}else if( $criteria == 2 ){
				$where_clause 	.= 	" AND `facility_equipment_id`='$device' ";
			}else if( $criteria == 3 ){
				$where_clause 	.= 	" AND `facility_id`='$facility' ";
			}else{}
	
	
			$sql 			=	"SELECT * FROM `".$this->db_view."` WHERE 1";
	
			$where_clause 	.= 	" AND ( `sample_code` NOT LIKE '%CONTROL%' ) ";
	
			$sql.=$where_clause;
	
			$result = R::getAll($sql);
			
			$this->data["criteria"] = $criteria;
			$this->data["res"] = $result;
			$this->load->view("pdf_report",$this->data);
			
						
			//echo $format."PDF";
		}else{echo $format."wrong value";}
	}

	
		public function submit(){//generates the reports
ini_set("memory_limit","128M");
$report_type	=	(int) $this->input->post("report_type");
$criteria	=	(int) $this->input->post("criteria");
$facility	=	(int) $this->input->post("facility");
$device	=	(int) $this->input->post("device");

$date_from	=	$this->input->post("date_from");
$date_to	=	$this->input->post("date_to");

echo $date_from;
die;

$user_group_id = $this->session->userdata("user_group_id");
$user_filter_used =	$this->session->userdata("user_filter_used");
$where_clause =	" AND `result_date` between '$date_from' and '$date_to' ";
if ( $report_type == 1 ){
$this->db_view = "v_pima_tests_details";
$where_clause .= " AND `valid` = '1' ";
}else if ($report_type==2){
$this->db_view = "v_pima_error_details";
$where_clause .= " AND `valid` = '0' ";
}else{	
$this->db_view = "v_pima_tests_details";
}
if( $criteria == 3 ){
$where_clause .=	" ".$this->poc_model->sql_user_delimiter($user_group_id,$user_filter_used )." ";
}else if( $criteria == 1 ){
$where_clause .= " AND `facility_equipment_id`='$device' ";
}else if( $criteria == 2 ){
$where_clause .= " AND `facility_id`='$facility' ";
}
$sql =	"SELECT * FROM `".$this->db_view."` WHERE 1";
$where_clause .= " AND ( `sample_code` NOT LIKE '%CONTROL%' ) ";
$sql.=$where_clause;
//echo $sql;
$res = R::getAll($sql);
$col_data = array();
$row_data = array();
if ( $report_type == 1 ){
$row_data[0] = array("Facility","Pima Device","Sample Code", "CD4 Count (cells/mm)", "Device Operator","Date of Result");
foreach ($res as $key => $value) {
$row_data[$key+1][0] =	$value["facility_name"];
$row_data[$key+1][1] =	$value["equipment_serial_number"];
$row_data[$key+1][2] =	$value["sample_code"];
$row_data[$key+1][3] =	$value["cd4_count"];
$row_data[$key+1][4] =	$value["operator"];
$row_data[$key+1][5] =	Date("Y, F, d",strtotime($value["result_date"]));
}
}else if ($report_type==2){
$row_data[0] = array("Facility","Pima Device","Sample Code", "Error Type", "Error Description", "Device Operator","Date of Result");
foreach ($res as $key => $value) {
$row_data[$key+1][0] =	$value["facility_name"];
$row_data[$key+1][1] =	$value["equipment_serial_number"];
$row_data[$key+1][2] =	$value["sample_code"];
$row_data[$key+1][3] =	$value["error_type_description"];
$row_data[$key+1][4] =	$value["error_detail"];
$row_data[$key+1][5] =	$value["operator"];
$row_data[$key+1][6] =	Date("Y, F, d",strtotime($value["result_date"]));
}
}else{
$row_data[0] = array("Facility","Pima Device","Sample Code", "CD4 Count (cells/mm)", "SUCCESSFUL TESTS", "Device Operator","Date of Result");
foreach ($res as $key => $value) {
$row_data[$key+1][0] =	$value["facility_name"];
$row_data[$key+1][1] =	$value["equipment_serial_number"];
$row_data[$key+1][2] =	$value["sample_code"];
$row_data[$key+1][3] =	$value["cd4_count"];
$row_data[$key+1][4] =	$value["validity"];
$row_data[$key+1][5] =	$value["operator"];
$row_data[$key+1][6] =	Date("Y, F, d",strtotime($value["result_date"]));
}
}
$worksheet["column_data"]	=	$col_data;
$worksheet["row_data"]	=	$row_data;
$this->worksheet($worksheet);
}
	private function print_report(){
		
	}
	private function pdf(){
		
	}
	private function worksheet($worksheet){

		$worksheet["doc_creator"] 	= $this->session->userdata("username");
		$worksheet["doc_title"] 	= $this->session->userdata("username");
		$worksheet["file_name"] 	= "CD4_Report_(".$this->session->userdata("username").").xls";

		$this->load->module("utils/worksheets");

		$this->worksheets->create_worksheet($worksheet);
		
	}
	private function email(){
		
	}
}