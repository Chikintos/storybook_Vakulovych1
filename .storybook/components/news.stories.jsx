import React from 'react';
import NewsPost from '../../src/components/news_post.stories';

export default {
  title: 'News',
};
export const News_Post = () => (
  <NewsPost
    title="Польща закриває кордон для російських і білоруських фур із 1 червня"
    date="29.05.2023"
    author="ЄВРОПЕЙСЬКА ПРАВДА"
    photo_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAC73DH_o_oHQeqTmV8w0RohKcxxSEkrlz3XZ5c3gI&s"
    text="Міністр внутрішніх справ та адміністрації Польщі Маріуш Камінський у понеділок підписав розпорядження про призупинення вантажного руху для російських і білоруських транспортних засобів через кордон Білорусі з 1 червня."
  ></NewsPost>
)