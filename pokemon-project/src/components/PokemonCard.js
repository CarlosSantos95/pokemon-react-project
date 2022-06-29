import { getTypeColor } from '../utils/basicFunctions';

export default function GeneralList({ item }) {
    return (
        <div className="card" >
            <img src={item.main_avatar} className="card-img-top" alt="..." />
            <div className="card-body">
                <span className="card-title">{item.order}</span>
                <h5 className="card-title">{item.name}</h5>
                <div>
                    {item.types.map((element) => (
                        <span key={element.type.name} className={`badge`} style={{backgroundColor: getTypeColor(element.type.name)}}>
                            {element.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
