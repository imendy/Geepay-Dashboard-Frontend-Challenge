"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
];

export function RevenueChart() {
  const [activeBar, setActiveBar] = useState(null);

  return (
    <ResponsiveContainer width="100%" height={350} className="text-foreground">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <defs>
          <linearGradient id="gradientProfit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#34CAA5" stopOpacity={2} />
            <stop offset="95%" stopColor="#ffffff" stopOpacity={1} />
          </linearGradient>

          <linearGradient id="gradientLoss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e3e7fc" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#e3e7fc" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
        />

        <Tooltip
          cursor={{ fill: "transparent" }}
          content={({ payload }) => {
            return (
              <div className="custom-tooltip">
                {payload?.map((entry) => (
                  <p
                    key={entry.name}
                    style={{
                      backgroundColor: "#090C2C",
                      color: "white",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                      borderRadius: "5px",
                    }}
                  >
                    ${entry.value?.toLocaleString()}{" "}
                    {/* Format value with commas */}
                  </p>
                ))}
              </div>
            );
          }}
        />

        <Bar
          dataKey="total"
          fill="url(#gradientProfit)"
          activeBar={true}
          isAnimationActive={true}
          barSize={30}
          radius={[40, 40, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
