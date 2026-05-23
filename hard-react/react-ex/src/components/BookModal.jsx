import React from 'react';

function BookModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-xs">
      <div className="bg-slate-900 rounded-xl overflow-hidden max-w-md w-full text-slate-100 shadow-2xl relative border border-slate-800">
        
        <div className="h-2 bg-teal-500 w-full" />

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-teal-400 leading-tight">{book.title}</h2>
              <p className="text-slate-400 text-xs mt-1">저자: {book.author || '정보 없음'}</p>
            </div>
            <button 
              onClick={onClose} 
              className="text-slate-500 hover:text-white text-xl p-1 ml-4 shrink-0 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3 text-xs border-t border-slate-800 pt-4 font-sans">
            <div className="grid grid-cols-3 gap-2">
              <span className="text-slate-500 font-medium">출판사</span>
              <span className="col-span-2 text-slate-300">{book.publisher || '정보 없음'}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-slate-500 font-medium">발행연도</span>
              <span className="col-span-2 text-slate-300">{book.pubYear ? `${book.pubYear}년` : '정보 없음'}</span>
            </div>
            {book.vol && (
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500 font-medium">권차 정보</span>
                <span className="col-span-2 text-slate-300">{book.vol}권</span>
              </div>
            )}
            <div className="grid grid-cols-3 gap-2">
              <span className="text-slate-500 font-medium">소장 도서관</span>
              <span className="col-span-2 text-teal-400 font-medium">{book.manageName || '교육청 산하 도서관'}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-slate-500 font-medium">ISBN</span>
              <span className="col-span-2 text-slate-400 font-mono">{book.isbn || '정보 없음'}</span>
            </div>
            {book.callNo && (
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500 font-medium">청구기호</span>
                <span className="col-span-2 text-yellow-500 font-mono font-semibold">{book.callNo}</span>
              </div>
            )}
          </div>
          
          <div className="mt-6 border-t border-slate-800 pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-semibold transition-colors"
            >
              닫기
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BookModal;