package com.cts.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.bean.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	public User findByEmail(String email);
}
