interface MetaProps {
  emoji?: string;
}

export const Meta = ({ emoji }: MetaProps) => <div>{emoji && <span>{emoji}</span>}</div>;
