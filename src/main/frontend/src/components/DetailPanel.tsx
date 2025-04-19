import React, { useEffect, useRef } from 'react';
import { KeywordDescription } from '../pages/keyword/types';

interface DetailPanelProps {
  isOpen: boolean;
  selectedKeyword: KeywordDescription | null;
  onClose: () => void;
  onRelatedKeywordClick: (keyword: string) => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({
  isOpen,
  selectedKeyword,
  onClose,
  onRelatedKeywordClick
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!selectedKeyword) return null;

  const { keyword, description, example, relatedKeywords } = selectedKeyword;

  const renderDescription = () => {
    return description.split('\n').map((paragraph: string, idx: number) => (
      <p key={idx} className="description-paragraph">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className={`detail-panel ${isOpen ? 'open' : ''}`} ref={panelRef}>
      <button className="close-detail" onClick={onClose}>
        &times;
      </button>
      <div className="detail-content">
        <h2 className="detail-keyword">{keyword}</h2>
        <div className="detail-description">
          {renderDescription()}
        </div>
        {example && (
          <div className="detail-example">
            <h3>예시</h3>
            <pre>{example}</pre>
          </div>
        )}
        {relatedKeywords && relatedKeywords.length > 0 && (
          <div className="detail-related">
            <h3>관련 키워드</h3>
            <div className="related-keywords">
              {relatedKeywords.map((relatedKeyword: string) => (
                <button
                  key={relatedKeyword}
                  className="related-keyword-btn"
                  onClick={() => onRelatedKeywordClick(relatedKeyword)}
                >
                  {relatedKeyword}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPanel; 