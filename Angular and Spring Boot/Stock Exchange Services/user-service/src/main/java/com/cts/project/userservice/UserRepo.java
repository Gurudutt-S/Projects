package com.cts.project.userservice;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {

	public User findByEmail(String email);

	public User findByUsername(String username);

	public Optional<User> findByUsernameAndPassword(String username, String password);

}
