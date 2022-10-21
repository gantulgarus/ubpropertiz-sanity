// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Үл хөдлөх хөрөнгө",
      name: "property",
      type: "document",
      fields: [
        {
          title: "Гарчиг",
          name: "title",
          type: "string",
        },
        {
          title: "Зураг",
          name: "featured_image",
          type: "image",
        },
        {
          title: "Огноо",
          name: "date",
          type: "datetime",
        },
        {
          title: "slug",
          name: "slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 200, // will be ignored if slugify is set
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
          },
        },
        {
          title: "Статус",
          name: "status",
          type: "reference",
          to: [{ type: "status" }],
        },
        {
          title: "Лавлагааны дугаар",
          name: "propertyId",
          type: "number",
        },
        {
          title: "Үнэ",
          name: "price",
          type: "number",
        },
        {
          title: "Нийт талбай м2",
          name: "square",
          type: "number",
        },
        {
          title: "Зочны өрөө",
          name: "livingroom",
          type: "number",
        },
        {
          title: "Унтлагын өрөө",
          name: "bathroom",
          type: "number",
        },
        {
          title: "Угаалгын өрөө",
          name: "bedroom",
          type: "number",
        },
        {
          title: "Граж",
          name: "garage",
          type: "number",
        },
        {
          title: "Тайлбар",
          name: "description",
          type: "text",
        },
        {
          title: "Үл хөдлөх төрөл",
          name: "property_type",
          type: "reference",
          to: [{ type: "property_type" }],
        },
        {
          title: "Үл хөдлөх үзүүлэлт",
          name: "property_feature",
          type: "tags",
          options: {
            includeFromReference: "property_feature",
          },
        },
        {
          title: "Агент",
          name: "agent",
          type: "reference",
          to: [{ type: "agent" }],
        },
        {
          title: "Байршил",
          name: "location",
          type: "reference",
          to: [{ type: "location" }],
        },
        {
          title: "Хаяг",
          name: "address",
          type: "geopoint",
        },
        {
          title: "Зургийн цомог",
          name: "imagesGallery",
          type: "array",
          of: [{ type: "image" }],
        },
      ],
    },
    {
      title: "Агент",
      name: "agent",
      type: "document",
      fields: [
        {
          title: "Агентын нэр",
          name: "name",
          type: "string",
        },
        {
          title: "Агентын зураг",
          name: "agent_image",
          type: "image",
        },
        {
          title: "Утасны дугаар",
          name: "phone",
          type: "number",
        },
        {
          title: "Мэйл хаяг",
          name: "email",
          type: "string",
        },
        {
          title: "Фейсбүүк",
          name: "facebook",
          type: "string",
        },
      ],
    },
    {
      title: "Статусын мэдээлэл",
      name: "status",
      type: "document",
      fields: [
        {
          title: "Статусын нэр",
          name: "name",
          type: "string",
        },
      ],
    },
    {
      title: "Үл хөдлөх хөрөнгийн төрөл",
      name: "property_type",
      type: "document",
      fields: [
        {
          title: "Төрлийн нэр",
          name: "name",
          type: "string",
        },
      ],
    },
    {
      title: "Байршил",
      name: "location",
      type: "document",
      fields: [
        {
          title: "Байршил",
          name: "name",
          type: "string",
        },
      ],
    },
    {
      title: "Үл хөдлөх хөрөнгийн үзүүлэлт",
      name: "property_feature",
      type: "document",
      fields: [
        {
          title: "Үзүүлэлт нэр",
          name: "label",
          type: "string",
        },
        {
          title: "Үзүүлэлт утга",
          name: "value",
          type: "string",
        },
      ],
    },
    {
      title: "Пост",
      name: "post",
      type: "document",
      fields: [
        {
          title: "Гарчиг",
          name: "title",
          type: "string",
        },
        {
          title: "slug",
          name: "slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 200, // will be ignored if slugify is set
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
          },
        },
        {
          title: "Зураг",
          name: "featured_image",
          type: "image",
        },
        {
          title: "Постын агуулга",
          name: "content",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
            },
          ],
        },
        {
          title: "Огноо",
          name: "date",
          type: "datetime",
        },
        {
          title: "Агент",
          name: "agent",
          type: "reference",
          to: [{ type: "agent" }],
        },
      ],
    },
  ]),
});
