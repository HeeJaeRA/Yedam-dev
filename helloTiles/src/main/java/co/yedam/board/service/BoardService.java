package co.yedam.board.service;

import java.util.List;

import co.yedam.admin.service.MemberVO;

public interface BoardService {
	// 등록, 수정, 삭제, 조회
	public boolean addBoard(BoardVO vo);
	public boolean editBoard(BoardVO vo);
	public boolean removeBoard(int boardNo);
	public List<BoardVO> boardList();
	public BoardVO getBoard(int boardNo);
	MemberVO loginCheck(String id, String pw);
	List<MemberVO> memberList();

}
