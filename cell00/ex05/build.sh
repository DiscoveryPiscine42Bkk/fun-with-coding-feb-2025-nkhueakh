#!/bin/bash

# ตรวจสอบว่ามีอาร์กิวเมนต์หรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # วนลูปผ่านทุกอาร์กิวเมนต์และสร้างโฟลเดอร์ที่มี "ex" นำหน้า
    for arg in "$@"; do
        mkdir -p "ex$arg"
    done
fi


