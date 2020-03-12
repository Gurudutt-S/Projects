package com.cts.project.stockPriceservice;

import java.time.LocalDate;
import java.util.List;

import javax.mail.Multipart;

import org.springframework.web.multipart.MultipartFile;

public interface StockPriceService {

	public List<StockPrice> getAllStockPrices();

	public StockPrice getStockPriceById(int id);

	public StockPrice saveStockPrice(StockPrice stockPrice);

	public void deleteStockPrice(int id);

	public StockPrice updateStockPrice(StockPrice stockPrice);
	
	public importSummary addStockPricesFromExcelSheet(MultipartFile file)throws Exception;

	List<StockPriceOnPeriod> getStockPriceBetweenDates(String companyCode, String stockExchange, LocalDate startDate,
			LocalDate endDate, String Periodicity);

}
