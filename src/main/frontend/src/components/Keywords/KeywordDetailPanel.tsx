import React, { useEffect, useRef } from 'react';

interface KeywordDescription {
  keyword: string;
  description: string;
  example?: string;
  relatedKeywords?: string[];
}

interface KeywordDetailPanelProps {
  selectedKeyword: KeywordDescription | null;
  isOpen: boolean;
  onClose: () => void;
  onRelatedKeywordClick: (keyword: string) => void;
}

export const KeywordDetailPanel: React.FC<KeywordDetailPanelProps> = ({
  selectedKeyword,
  isOpen,
  onClose,
  onRelatedKeywordClick
}) => {
  const detailPanelRef = useRef<HTMLDivElement>(null);
  
  // ESC 키 눌렀을 때 상세 설명 패널 닫기
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);
  
  // 바탕화면 클릭 시 상세 설명 패널 닫기
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && detailPanelRef.current && !detailPanelRef.current.contains(e.target as Node)) {
        // 클릭된 요소가 키워드 카드가 아닌 경우에만 닫기
        const keywordCard = (e.target as Element).closest('.keyword-card');
        if (!keywordCard) {
          onClose();
        }
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div 
      className={`detail-panel ${isOpen ? 'open' : ''}`}
      ref={detailPanelRef}
    >
      <button className="close-detail" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </svg>
      </button>
      {selectedKeyword && (
        <div className="detail-content">
          <h2>{selectedKeyword.keyword}</h2>
          <p className="detail-description">{selectedKeyword.description}</p>
          
          {selectedKeyword.example && (
            <div className="detail-example">
              <h3>예시</h3>
              <pre>{selectedKeyword.example}</pre>
            </div>
          )}
          
          {selectedKeyword.relatedKeywords && selectedKeyword.relatedKeywords.length > 0 && (
            <div className="detail-related">
              <h3>관련 키워드</h3>
              <div className="related-tags">
                {selectedKeyword.relatedKeywords.map((related, idx) => (
                  <span 
                    key={idx} 
                    className="related-tag"
                    onClick={() => onRelatedKeywordClick(related)}
                  >
                    {related}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="detail-footer">
            <p className="escape-hint">
              <kbd>ESC</kbd> 키를 누르거나 바탕화면을 클릭하여 닫기
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeywordDetailPanel; 