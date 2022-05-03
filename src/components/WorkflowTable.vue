<template>
  <div>
    <v-table v-if="workflows.length">
      <thead>
        <tr>
          <th class="text-left" v-for="header in headers" :key="header.value">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in workflows" :key="item.name">
          <td v-for="header in headers" :key="header.value">
            {{ item[header.value] }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import gql from 'graphql-tag';

// 全件取得
export const ALL_WORKFLOWS = gql`
  query allWorkflows {
    workflows(orderBy: id_ASC) {
      id
      title
      description
      detail_json
      createdAt
    }
  }
`;

export default {
  name: 'WorkflowTable',
  data: () => ({
    // ワークフロー情報
    workflows: [],
    // テーブルのヘッダー情報
    headers: [
      { text: 'ID', value: 'id' },
      { text: '作成日', value: 'createdAt' },
      { text: 'タイトル', value: 'title' },
      { text: '詳細', value: 'description' },
      { text: ' ', value: 'action', sortable: false },
    ],
    // データテーブルの初期ソート、表示件数の設定
    pagination: {
      itemsPerPage: 10,
      sortBy: 'createdAt',
      sortDesc: true,
    },
  }),
  created() {
    this.$apollo
      .mutate({
        mutation: ALL_WORKFLOWS,
      })
      .then((res) => {
        this.workflows = res.data.workflows;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
