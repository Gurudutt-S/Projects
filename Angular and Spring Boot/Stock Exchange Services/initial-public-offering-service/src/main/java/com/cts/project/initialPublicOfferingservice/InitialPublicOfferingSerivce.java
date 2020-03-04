package com.cts.project.initialPublicOfferingservice;

import java.util.List;

public interface InitialPublicOfferingSerivce {

	public List<InitialPublicOffering> getAllInitialPublicOfferings();

	public InitialPublicOffering getInitialPublicOfferingById(int id);

	public InitialPublicOffering saveInitialPublicOffering(InitialPublicOffering ipo);

	public void deleteInitialPublicOffering(int id);

	public InitialPublicOffering updateInitialPublicOffering(InitialPublicOffering ipo);

}
