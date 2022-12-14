package com.fairytail.img.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {
    @Query(value = "select max(i.postId) from PostEntity i")
    Long getMaxId();

    Optional<PostEntity> findByPostId(Long postId);

    @Transactional
    Long deleteByPostId(Long postId);

    @Query(value = "select * from PostEntity p where lat=:lat and lng=:lng order by date desc limit 25", nativeQuery = true)
    List<PostEntity> findListLatest(Double lat, Double lng);
    @Query(
            value = "SELECT * FROM post p WHERE p.lat BETWEEN :lat - 0.01 AND :lat + 0.01 " +
                    "AND p.lng BETWEEN :lng - 0.01 AND :lng + 0.01 AND (p.status = 0 OR p.user_id = :userId) ORDER BY p.date DESC LIMIT 25", nativeQuery = true
    )
    List<PostEntity> findTop25ByLatAndLngAndStatusOrderByDateDesc(Double lat, Double lng, Long userId);
    List<PostEntity> findByUserIdOrderByDateDesc(Long userId);
    @Query(
            value = "SELECT * FROM post p WHERE p.lat BETWEEN :lat - 0.01 AND :lat + 0.01 " +
                    "AND p.lng BETWEEN :lng - 0.01 AND :lng + 0.01 AND (p.status = 0 OR p.user_id = :userId) ORDER BY p.like_cnt DESC LIMIT 25", nativeQuery = true
    )
    List<PostEntity> findTop25ByLatAndLngAndStatusOrderByLikeCntDesc(Double lat, Double lng, Long userId);

    List<PostEntity> findAllByUserIdOrStatus(Long userId, Integer status);
}
