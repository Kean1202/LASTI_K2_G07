"use client"

import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue,  } from "@nextui-org/react";
import React, {useEffect, useState} from "react";


const PertumbuhanTable = (props) => {
    const [data, setData] = useState(props.dataTanaman);

    function action(id){
        setData(prevData => prevData.map(row => {
            if (row.id === id) {
                if (row.Kelembapan < 80){
                    return {
                        ...row,
                        Kelembapan: row.Kelembapan + 10
                      };
                } else{
                    return row;  
                }
            } else {
              return row;
            }
          }));
        console.log(data)
    }

    const ButtonInTable = ({buttonText, size, popupMessage, action_func, id}) => {
        let buttonSize = "h-12 w-28"; // Default size
        if (size == "small") {
          buttonSize = "h-8 w-20"; // Small size
        } else if (size == "large") {
          buttonSize = "h-16 w-36";
        }
      
        const [showPopup, setShowPopup] = useState(false);
      
        const handleClick = () => {
          action_func(id); 
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        };
      
        return (
          <div className="mx-2 my-8 rounded-3xl border border-black button_bg ${buttonSize} transition-all font-inter
          hover:bg-yellow hover:text-black text-center text-xl flex items-center justify-center">
              <button onClick={handleClick}>{buttonText}</button>
              {showPopup && <Popup message={popupMessage} />}
          </div>
          
        )
      }

    // Table columns
	const columns = [
		{
			key: "cluster_tanaman",
			label: "CLUSTER",
		},
		{
			key: "kelembapan_tanaman",
			label: "KELEMBAPAN",
		},
		{
			key: "nutrisi_tanaman",
			label: "NUTRISI",
		},
        {
            key: "action_tanaman",
            label: "ACTION",
        }
	];

    function mapRows(data){
        return data.map((currData) => {
            return {
                key: currData.id,
                cluster_tanaman: currData.Cluster,
                kelembapan_tanaman: (currData.Kelembapan).toString() + "%",
                nutrisi_tanaman: currData.Nutrisi,
                action_tanaman: 
                <ButtonInTable
                    buttonText={"Irigate"}
                    size="small"
                    popupMessage={"Lakukan Irigasi"}
                    action_func={action}
                    id={currData.id}
                />
            }
        })
    }
  
    return (
        <Table aria-label="Tabel Pertumbuhan Tanaman" align="center" shadow="md" isStriped>
            <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}  className="green_gradient font-bold" style={{backgroundColor: '#b0dcbc'}}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={mapRows(data)}>
                {(item) => (
                    <TableRow key={item.key} align="center">
                            {(columnKey) => <TableCell className="font-inter text-center">{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
  )
}

export default PertumbuhanTable