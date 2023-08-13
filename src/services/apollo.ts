import { ApolloClient, InMemoryCache } from "@apollo/client";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTE1MjU2MjEsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xsMnFvY3V0MHZ0eTAxdWxkaHYxY283ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWRjZGEzODgtNjE1MC00YjIxLWI3NTktYmQwZWRkYWYzY2QxIiwianRpIjoiY2w0ZWN3bDZ4MGd4dDAxd2I5bjllOTVvdCJ9.vPihzNJw5wo2hRXzPDdeN0A_6yROervaHp0-3ma7S_ZrLxSwXQeK3mZbM-9pDk5Ab7SPPsSJrFmVv2wMhy9APn9g9dXfV7c5PQsnkxTmDDqt678DDqOLNs2mmpa814_Hoo8sNgmbMNSDEIENUmdbBEJ9FrfHQ2s-oKWpoCyX_Z3FmEBZmwsrzRcDVdylAsZ4o8pXgqabKy6vz6iaFiITFnrrALA1UhTAvu8QTZL64Szxw5iE6um8r7ub0YVLw-l09bj2uony_fCItHComRMy_6Q4wuNYT_fXweZo6WqvOPmQC3PmRLYNpTEmNkw6RHUDz34BFmndndv1WpWYTO8MuBqlj-qIZ2-5v8Hj_zWZu7CluP5Xfl8Sx1sVbYH1S_c56I0qGk-X46rJCPpCAG4MN9yEi3DlTyf2IelhT2FvD1abSLSbWDtJ08Jl0lJy5VeKPL8l0h-_2Oa4VMNlUHcG8JvRm-rIxOXH2CA1mEEHR9V09_a6qKrv15DVrt-ZUIjJqLahCPlmyeHSqdSgu8FfR6EK_qYe73qJ9wltPwdBQxfJfWzPA3WM3T31K28yes-IpQkd1sFcUfLHUt9gbd7QYq7j4N9Y44sXZxYojEQQPDx4tetxWNS2vdnc-nifZHapsGGdidPlxTRUGhQKweYbJioL94bASgGvnzNyPjtzYJI"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api-sa-east-1.hygraph.com/v2/cll2qocut0vty01uldhv1co7k/master",
  headers: {
    Authorization: `Bearer ${token}`
  }
})