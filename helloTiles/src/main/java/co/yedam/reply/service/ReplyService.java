package co.yedam.reply.service;

import java.util.List;
import java.util.Map;

public interface ReplyService {
	
	public List<ReplyVO> replyList(int boardNo, int page);
	public ReplyVO getReply(int replyNo);
	public boolean addReply(ReplyVO vo);
	public boolean editReply(ReplyVO vo);
	public boolean removeReply(int replyNo);
	
	public int getTotalCnt(int boardNo);
	
	public List<Map<String, Object>> getReplyCntByMember();
}
