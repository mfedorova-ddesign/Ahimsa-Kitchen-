import type { EducationalBlock } from '../i18n/types';

interface Props {
  blocks: EducationalBlock[];
}

export function EducationalTips({ blocks }: Props) {
  return (
    <div className="educational-tips">
      {blocks.map((block) => (
        <div key={block.title} className="edu-tip">
          <h4>{block.title}</h4>
          <p>{block.body}</p>
        </div>
      ))}
    </div>
  );
}
