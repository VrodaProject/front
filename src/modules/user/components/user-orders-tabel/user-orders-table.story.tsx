import type { Meta, StoryObj } from "@storybook/react";
import { UserOrdersTabel } from "./user-orders-table.component";

const meta: Meta<typeof UserOrdersTabel> = {
  title: "User/Orders table component",
  component: UserOrdersTabel,
};

export default meta;
type Story = StoryObj<typeof UserOrdersTabel>;

const mockData = {
  data: {
    orders: [
      {
        created_at: "2024-01-03T12:17:00.396+00:00",
        order_items: [
          {
            amount: 1,
            item: {
              title: "test",
            },
          },
          {
            amount: 1,
            item: {
              title: "Line Repair Nutrient - Аква Спрей із суперфудами",
            },
          },
        ],
        status: "NEW",
        sum: 2995,
      },
      {
        created_at: "2024-01-03T12:17:14.835+00:00",
        order_items: [
          {
            amount: 1,
            item: {
              title: "test",
            },
          },
          {
            amount: 1,
            item: {
              title: "Line Repair Nutrient - Аква Спрей із суперфудами",
            },
          },
        ],
        status: "NEW",
        sum: 2995,
      },
      {
        created_at: "2024-01-03T12:18:13.519+00:00",
        order_items: [
          {
            amount: 1,
            item: {
              title: "test",
            },
          },
          {
            amount: 1,
            item: {
              title: "Line Repair Nutrient - Аква Спрей із суперфудами",
            },
          },
        ],
        status: "NEW",
        sum: 2995,
      },
      {
        created_at: "2024-01-03T12:32:41.550733+00:00",
        order_items: [
          {
            amount: 1,
            item: {
              title: "test",
            },
          },
        ],
        status: "NEW",
        sum: 2200,
      },
      {
        created_at: "2023-11-14T11:26:51.554975+00:00",
        order_items: [
          {
            amount: 1,
            item: {
              title: "Line Repair Nutrient - Аква Спрей із суперфудами",
            },
          },
          {
            amount: 1,
            item: {
              title: "Tannic [cf] serum",
            },
          },
        ],
        status: "NEW",
        sum: 2095,
      },
      {
        created_at: "2023-11-17T23:26:44.396118+00:00",
        order_items: [
          {
            amount: 1,
            item: {
              title: "vlad",
            },
          },
          {
            amount: 1,
            item: {
              title: "Line Repair Nutrient - Аква Спрей із суперфудами",
            },
          },
        ],
        status: "NEW",
        sum: 1794,
      },
      {
        created_at: "2023-12-05T16:25:13.63786+00:00",
        order_items: [
          {
            amount: 1,
            item: {
              title: "Tannic [cf] serum",
            },
          },
        ],
        status: "NEW",
        sum: 1300,
      },
      {
        created_at: "2023-12-05T16:26:21.723534+00:00",
        order_items: [
          {
            amount: 1,
            item: {
              title: "Tannic [cf] serum",
            },
          },
        ],
        status: "NEW",
        sum: 1300,
      },
      {
        created_at: "2023-12-05T16:26:39.325508+00:00",
        order_items: [
          {
            amount: 1,
            item: {
              title: "Tannic [cf] serum",
            },
          },
        ],
        status: "NEW",
        sum: 1300,
      },
      {
        created_at: "2023-12-05T16:39:29.572501+00:00",
        order_items: [
          {
            amount: 2,
            item: {
              title: "Tannic [cf] serum",
            },
          },
          {
            amount: 1,
            item: {
              title: "test",
            },
          },
        ],
        status: "NEW",
        sum: 4800,
      },
    ],
    order_status: [
      {
        id: "NEW",
        label: "Новий",
      },
      {
        id: "IN_PROGRESS",
        label: "Готується до відправки",
      },
      {
        id: "DONE",
        label: "Відправлений",
      },
      {
        id: "DELIVERED",
        label: "Виданий клієнту",
      },
      {
        id: "CANCELED",
        label: "Відмінений",
      },
    ],
    payment_status: [
      {
        id: "PROCESSING",
        label: "Очікуємо оплати",
      },
      {
        id: "SUCCEEDED",
        label: "Оплачено",
      },
      {
        id: "FAILED",
        label: "Оплату відмінено",
      },
    ],
  },
};

export const Primary: Story = {
  render: (args) => (
    <UserOrdersTabel
      data={mockData.data.orders as any}
      orderStatus={mockData.data.order_status}
      paymentStatus={mockData.data.payment_status}
    />
  ),
};
