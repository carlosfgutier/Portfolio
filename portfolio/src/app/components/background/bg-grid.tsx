
import './styles.css';
import Image from "next/image";

export default function BgGrid() {
    const createTable = (size: number): JSX.Element => {        
        const rows = [];
        for (let r = 0; r < size; r++) {
            const cells = [];
            for (let c = 0; c < size; c++) {
                cells.push(<td key={`${r}-${c}`} className="cell" data-x={c} data-y={r}></td>);
            }
            rows.push(<tr key={r} className="row">{cells}</tr>);
        }
        return <table id="grid">{rows}</table>;
    };

    const table = createTable(100);

    return (
        <div className="grid-container">
            <Image
                src="/pink-blue-gradient.jpg"
                alt="Next.js Logo"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
            />
            {table}
        </div>
    );
}