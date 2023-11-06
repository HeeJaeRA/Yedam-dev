package co.yedam.board.service;

import java.util.List;

public interface BoardService {
	// 등록, 수정, 삭제, 조회
	public boolean addBoard(BoardVO vo);
	public boolean editBoard(BoardVO vo);
	public boolean removeBoard(int boardNo);
	public List<BoardVO> boardList();
	public BoardVO getBoard(int boardNo);
	
	//로그인 처리
	public MemberVO loginCheck(String id, String pw);
	
	public List<MemberVO> memberList();

}
