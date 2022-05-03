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

// タイトル検索
export const FETCH_WORKFLOW_BY_TITLE = gql`
  query fetchWorkflowByTitle($title: String) {
    workflows(where: { title_contains: $title }) {
      id
      title
      description
      detail_json
      createdAt
    }
  }
`;

// ID検索
export const FETCH_WORKFLOW_BY_ID = gql`
  query fetchWorkflowById($id: ID!) {
    workflows(where: { id: $id }) {
      id
      title
      description
      detail_json
      createdAt
    }
  }
`;

// 新規追加
export const CREATE_WORKFLOW = gql`
  mutation createWorkflow($title: String, $description: String) {
    createWorkflow(data: { title: $title, description: $description }) {
      id
      title
      description
      stage
    }
  }
`;

// 更新
export const UPDATE_WORKFLOW = gql`
  mutation updateWorkflow($id: ID, $title: String, $description: String) {
    updateWorkflow(data: { title: $title, description: $description }, where: { id: $id }) {
      id
      title
      description
      stage
    }
  }
`;

// 削除
export const DELETE_WORKFLOW = gql`
  mutation deleteWorkflow($id: ID) {
    deleteWorkflow(where: { id: $id }) {
      id
    }
  }
`;

// 公開
export const PUBLISH_WORKFLOW = gql`
  mutation publishWorkflow {
    publishManyWorkflows(to: PUBLISHED) {
      count
    }
  }
`;
