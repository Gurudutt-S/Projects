package com.cts.project.stockPriceservice;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

//@FeignClient("company-service")
@FeignClient("netflix-zuul-api-gateway-server")
//@FeignClient(name = "",url = "")
public interface CompanyServiceProxy {

	@GetMapping("/company-service/company")
	public List<CompanyDTO> getAllCompany();

}
