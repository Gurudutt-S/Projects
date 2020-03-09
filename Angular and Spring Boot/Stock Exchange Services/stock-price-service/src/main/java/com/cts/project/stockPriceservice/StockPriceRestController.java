package com.cts.project.stockPriceservice;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*")
@RestController
public class StockPriceRestController {

	@Autowired
	StockPriceService stockPriceService;

	@Autowired
	private CompanyServiceProxy companyServiceProxy;

//	Logger logger =LoggerFactory.getLogger(StockPriceRestController.class);
	// or
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@GetMapping("/stockPrice")
	public List<StockPrice> getAllStockPrice() {
		return stockPriceService.getAllStockPrices();
	}

	@GetMapping("/stockPrice/{id}")
	public StockPrice getStockPriceById(@PathVariable int id) {
		StockPrice price = stockPriceService.getStockPriceById(id);
		return price;
	}

	@PostMapping("/stockPrice")
	public StockPrice saveStockPrice(@RequestBody StockPrice stockPrice) {
		StockPrice price = stockPriceService.saveStockPrice(stockPrice);
		return price;
	}

	@DeleteMapping("stockPrice/{id}")
	public void deleteStockPrice(@PathVariable int id) {
		stockPriceService.deleteStockPrice(id);
	}

	@PutMapping("/stockPrice")
	public StockPrice updateStockPrice(@RequestBody StockPrice stockPrice) {
		StockPrice price = stockPriceService.updateStockPrice(stockPrice);
		return price;
	}

	@GetMapping("/stockPrice/company")
	public List<CompanyDTO> getAllCompanyByStockPrice() {
		logger.info("getAllCompany invoked......");
		List<CompanyDTO> companyDto = companyServiceProxy.getAllCompany();
		logger.info("Information --> {}", companyDto);
		return companyDto;
	}

	@PostMapping(value = "stockPrice/uploadStocksSheet", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> uploadStockSheet(@RequestParam("stocksSheet") MultipartFile file) {
		logger.info("File received:{}", file.getOriginalFilename());
		if (file.getOriginalFilename().endsWith(".xls") || file.getOriginalFilename().endsWith(".xlsx")) {
			try {
				return new ResponseEntity<importSummary>(stockPriceService.addStockPricesFromExcelSheet(file),
						HttpStatus.OK);
			} catch (IOException e) {
				e.printStackTrace();
				return new ResponseEntity<String>("Error reading file", HttpStatus.BAD_REQUEST);

			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
			}

		} else {

			return new ResponseEntity<String>("Wrong file extension", HttpStatus.BAD_REQUEST);
		}
	}

}
