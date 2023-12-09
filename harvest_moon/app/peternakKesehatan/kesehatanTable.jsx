"use client"

import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import ButtonInTable from "@/components/ButtonInTable";


const KesehatanTable = (props) => {
    const [data, setData] = useState(props.dataHewan);

    function action(id){
        setData(prevData => prevData.map(row => {
            if (row.id === id) {
                if (row.kondisi_hewan == 'Sick'){
                    return {
                        ...row,
                        kondisi_hewan: 'Healthy'
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
			key: "ID_hewan",
			label: "ID",
		},
        {
			key: "jenis_hewan",
			label: "JENIS",
		},
		{
			key: "kondisi_hewan",
			label: "KONDISI",
		},
        {
            key: "action_hewan",
            label: "ACTION",
        },
        
	];

    function mapRows(data){
        return data.map((currData) => {
            return {
                key: currData.id,
                jenis_hewan: currData.jenis_hewan,
                kondisi_hewan: currData.kondisi_hewan,
                action_tanaman: 
                <ButtonInTable
                    buttonText={"Obati"}
                    size="small"
                    popupMessage={`Perintah telah dikirim ke petani dengan ID hewan ${currData.id}`}
                    action_func={action}
                    id={currData.id}
                />
            }
        })
    }

	// table rows
  
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

export default KesehatanTable