backend:
  name: github
  repo: gabrielaktrifonova-cyber/hdcompass-site
  branch: main

media_folder: images/blog
public_folder: /images/blog

collections:
  - name: blog
    label: Blog Posts
    folder: blog-posts
    create: true
    slug: "{{slug}}"
    fields:
      - { label: Title, name: title, widget: string }
      - { label: Date, name: date, widget: datetime, format: "YYYY-MM-DD" }
      - { label: Category / Tag, name: tag, widget: string, hint: "e.g. Parenting · Personal" }
      - { label: Excerpt, name: excerpt, widget: text, hint: "2-3 sentence summary shown on the blog listing" }
      - { label: Cover Image, name: image, widget: image, required: false }
      - { label: Body, name: body, widget: markdown }

  - name: inner-compass
    label: My Inner Compass Posts
    folder: blog-posts/inner-compass
    create: true
    slug: "{{slug}}"
    fields:
      - { label: Title, name: title, widget: string }
      - { label: Date, name: date, widget: datetime, format: "YYYY-MM-DD" }
      - { label: Category / Tag, name: tag, widget: string }
      - { label: Excerpt, name: excerpt, widget: text }
      - { label: Cover Image, name: image, widget: image, required: false }
      - { label: Body, name: body, widget: markdown }
