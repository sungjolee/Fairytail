package com.fairytail.audio.vo;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * 게시글 리스트 리스폰스
 */
@Data
public class ResponsePostList {
    private Long postId;
    private Integer type;
    private String title;
    private Integer likeCnt;
    private Integer emojiNo;
    private LocalDateTime date;
}
