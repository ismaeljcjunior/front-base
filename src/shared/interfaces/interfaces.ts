
export interface ICButtonProps {
    texto: string;
    onClick: () => void;
}

export interface ICInputTextProps {
    valor: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}