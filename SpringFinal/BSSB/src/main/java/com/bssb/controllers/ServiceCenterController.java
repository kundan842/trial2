package com.bssb.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bssb.dao.ServiceCenterDao;
import com.bssb.dao.ServiceSlotInfoDao;
import com.bssb.dtos.ServiceCenterDto;
import com.bssb.entity.ServiceCenter;

import com.bssb.entity.ServiceSlotInfoTable;

@CrossOrigin
@RestController
@RequestMapping(path="/center")
public class ServiceCenterController {
	 @Autowired
	 private ServiceCenterDao dao;

	 @Autowired
	 private ServiceSlotInfoDao slotDao;

	 @PostMapping("/register")
	public ServiceCenter register(@RequestBody ServiceCenter  center)
	{
		return dao.RegisterCenter(center);
	}

	 @GetMapping("/getAll")
	 public List<ServiceCenterDto> serviceCenter()
	 {

		 return dao.GetAll();
	 }

	 @GetMapping("/getCenterByName/{name}")
	 public ServiceCenterDto center(@PathVariable String name)
	 {
		 return dao.getByName(name);
	 }

	 @PutMapping("/updateServiceCenter")
	 public String updateCenter(@RequestBody ServiceCenter center)
	 {
		 System.out.println(center.getCapacity());
		return dao.updateCenterDetails(center); 
	 }
	/* //ddmmyyyy
	 @GetMapping("/getSlotDetails/{name}/{date}")
	 public ServiceSlotInfoTable slotDetailsForDate(@PathVariable String name, @PathVariable String date)
	 {
		 ServiceCenter center = dao.getByName(name);
		 return slotDao.slotDetailsOfCenter(date, center.getRegNo());
	 }   */
	 
	 
	 //Akshay
	 @GetMapping("/getCities")
	 public ArrayList<String> getAllCities()
	 {
		 return dao.getCities();
	 }
	 
	 @GetMapping("/getCenterByCity/{city}")
	 public ArrayList<String> getCenterByCity(@PathVariable String city)
	 {
		 return dao.getCenters(city);
	 }
	 



}