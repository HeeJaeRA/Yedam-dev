package org.yedam.service;

import java.util.List;

public interface MemberService {
	
	public List<MemberVO> memberList();
	
	public boolean addMember(MemberVO vo);
	
	public boolean modifyMember(MemberVO vo);
}
