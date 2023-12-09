"use client";
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import Popup from "@/components/Popup";

const SiklusTable = (props) => {
    const [data, setData] = useState(props.dataHewan);

    function action(id){
        setData(prevData => prevData.map(row => {
            if (row.id === id) {
                return {
                        ...row,
                        siklus_hewan: 0
                };
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
			key: "siklus_hewan",
			label: "SIKLUS",
		},
        {
            key: "action_hewan",
            label: "ACTION",
        }
	];

    const siklusSapi = ["Juvenile", "Mature", "Lactation"];
    const siklusAyam = ["Juvenile", "Mature", "Egg-laying"];


    function mapRows(data){
        return data.map((currData) => {
            return {
                key: currData.id,
                ID_hewan: currData.id,
                jenis_hewan: currData.jenis_hewan,
                siklus_hewan: currData.siklus_hewan,
                action_hewan: 
                <ButtonInTable
                    buttonText={"Produksi"}
                    size="small"
                    popupMessage={"Lakukan Produksi"}
                    action_func={action}
                    id={currData.id}
                />
            }
        })
    }

    const [rows, setRows] = useState([
        {
            key: "1",
            ID_hewan: "001",
            jenis_hewan: "Sapi",
            siklus_hewan: 1,
            action_hewan: 
            <ButtonInTable
                buttonText={"Produksi"}
                size="small"
                popupMessage={"Lakukan Produksi"}
            />
        },

        {
            key: "2",
            ID_hewan: "002",
            jenis_hewan: "Sapi",
            siklus_hewan: 0,
            action_hewan: 
            <ButtonInTable
                buttonText={"Produksi"}
                size="small"
                popupMessage={"Lakukan Produksi"}
            />
        },

        {
            key: "3",
            ID_hewan: "002",
            jenis_hewan: "Ayam",
            siklus_hewan: 2,
            action_hewan: 
            <ButtonInTable
                buttonText={"Produksi"}
                size="small"
                popupMessage={"Lakukan Produksi"}
            />
        },
    ])

// // Update siklus_hewan every 5 seconds
// useEffect(() => {
//     const timer = setInterval(() => {
//         setRows(prevRows => prevRows.map(row => ({
//             ...row,
//             siklus_hewan: row.siklus_hewan < 2 ? row.siklus_hewan + 1 : row.siklus_hewan
//         })));
//     }, 5000);
//     return () => clearInterval(timer);
// }, []);

// Reset siklus_hewan to 0
// const resetSiklus = (key) => {
//     setRows(prevRows => prevRows.map(row => row.key === key ? {...row, siklus_hewan: 0} : row));
// };

    return (
        <Table aria-label="Tabel Pertumbuhan Tanaman" align="center" shadow="md" isStriped>
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}  className="green_gradient font-bold">{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={mapRows(data)}>
                {(item) => (
                    <TableRow key={item.key} align="center">
                        {(columnKey) => {
                            if (columnKey === "siklus_hewan") {
                                return <TableCell className="font-inter text-center">{item.jenis_hewan === "Sapi" ? siklusSapi[item[columnKey]] : siklusAyam[item[columnKey]]}</TableCell>;
                            } else if (columnKey === "action_hewan") {
                                return <TableCell className="font-inter text-center">
                                    <ButtonInTable
                                        buttonText={"Produksi"}
                                        size="small"
                                        popupMessage={"Lakukan Produksi"}
                                        action_func={action}
                                        id={item.key}
                                    />
                                </TableCell>;
                            } else {
                                return <TableCell className="font-inter text-center">{getKeyValue(item, columnKey)}</TableCell>;
                            }
                        }}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default SiklusTable