import React from 'react';

function BookCard({ book, onOpenModal }) {
  const bookTitle = book.title || '제목 정보 없음';
  const authorName = book.author || '저자 정보 없음';
  const publisher = book.publisher || '출판사 미상';
  const pubYear = book.pubYear || '연도 미상';

  return (
    <div 
      className="bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col justify-between border border-slate-800 hover:border-slate-700"
      onClick={() => onOpenModal(book)}
    >
      <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-indigo-950 flex flex-col justify-center p-5 border-b border-slate-800 relative">
        <div className="text-teal-400 text-xs font-semibold mb-1">BOOK</div>
        <h4 className="text-white font-bold text-base line-clamp-2 leading-snug">{bookTitle}</h4>
        <p className="text-slate-400 text-xs mt-3 truncate">저자: {authorName}</p>
        <span className="absolute bottom-2 right-3 text-[10px] text-slate-500">SEN Public Library</span>
      </div>

      <div className="p-4 bg-slate-900/40">
        <p className="text-xs text-slate-400 truncate">출판사: {publisher}</p>
        <div className="flex justify-between items-center text-xs mt-2 text-slate-500">
          <span>발행: {pubYear}</span>
          {book.vol && <span className="text-teal-500 font-mono">Vol. {book.vol}</span>}
        </div>
      </div>
    </div>
  );
}

export default BookCard;