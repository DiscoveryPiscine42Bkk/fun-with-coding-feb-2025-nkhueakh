#!/bin/bash

# ตรวจสอบว่ามีอาร์กิวเมนต์หรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # แสดงผลอาร์กิวเมนต์ทีละบรรทัด (สูงสุด 3 ค่า)
    for arg in "$1" "$2" "$3"; do
        # ตรวจสอบว่าค่าอาร์กิวเมนต์เป็นค่าว่างหรือไม่
        [ -n "$arg" ] && echo "$arg"
    done
fi

