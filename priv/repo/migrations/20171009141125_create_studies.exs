defmodule Obs.Repo.Migrations.CreatePost do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :title, :string, null: false
      add :description, :text, null: true
      add :file, :string, null: true
      add :image, :string, null: true
      add :type, :string, null: false
      add :is_home, :boolean, null: false
      add :category_id, references(:indicator_categories, on_delete: :nothing)

      timestamps()
    end
    create index(:posts, [:title])
    create index(:posts, [:type])
    create index(:posts,[:category_id])
  end
end
