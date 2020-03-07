package com.cts.project.userservice;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {

	public User findByEmail(String email);
	
	public User findByUsername(String username);
	
}
