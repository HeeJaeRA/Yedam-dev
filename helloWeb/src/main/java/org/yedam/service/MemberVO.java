package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// https://projectlombok.org/
// https://mvnrepository.com/artifact/org.projectlombok/lombok/1.18.30

@Data
@AllArgsConstructor
@NoArgsConstructor

public class MemberVO {
	private String mid;
	private String pass;
	private String name;
	private String phone;
}
