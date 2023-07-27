package com.bala.tutorappspring.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bala.tutorappspring.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
