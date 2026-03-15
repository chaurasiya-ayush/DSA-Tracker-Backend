# DSA Tracker API Documentation

## Authentication

### Student Registration
`POST /api/auth/student/register`

**Request:**
```json
{
  "name": "string",
  "email": "string", 
  "username": "string",
  "password": "string",
  "batch_id": "number",
  "leetcode_id": "string",
  "gfg_id": "string",
  "github": "string",
  "linkedin": "string",
  "enrollment_id": "string"
}
```

**Response:**
```json
{
  "message": "Student registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "batch_id": 1,
    "city_id": 1,
    "leetcode_id": "john123",
    "gfg_id": "john456",
    "github": "johndoe",
    "linkedin": "https://linkedin.com/in/johndoe",
    "enrollment_id": "ENR123"
  }
}
```

### Student Login
`POST /api/auth/student/login`

**Request:**
```json
{
  "email": "string",
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "john@example.com",
    "username": "johndoe",
    "role": "STUDENT",
    "userType": "student",
    "batchId": 1,
    "batchSlug": "batch-2024",
    "cityId": 1
  },
  "tokens": {
    "accessToken": "jwt_token_here",
    "refreshToken": "refresh_token_here"
  }
}
```

### Student Logout
`POST /api/auth/student/logout`

**Headers:** `Authorization: Bearer <access_token>`

**Response:**
```json
{
  "message": "Logout successful"
}
```

### Admin Login
`POST /api/auth/admin/login`

**Request:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "admin@example.com",
    "username": "admin",
    "role": "SUPERADMIN|TEACHER|INTERN",
    "userType": "admin",
    "batchId": 1,
    "batchSlug": "batch-2024",
    "cityId": 1
  },
  "tokens": {
    "accessToken": "jwt_token_here",
    "refreshToken": "refresh_token_here"
  }
}
```

#### Admin Logout
`POST /api/auth/admin/logout`

**Headers:** `Authorization: Bearer <access_token>`

**Response:**
```json
{
  "message": "Logout successful"
}
```

#### Google Login
`POST /api/auth/google-login`

**Request:**
```json
{
  "idToken": "google_id_token_here"
}
```

**Response:**
```json
{
  "message": "Google login successful",
  "user": {
    "id": 1,
    "email": "user@gmail.com",
    "username": "user123",
    "role": "STUDENT",
    "userType": "student",
    "batchId": 1,
    "batchSlug": "batch-2024",
    "cityId": 1
  },
  "tokens": {
    "accessToken": "jwt_token_here",
    "refreshToken": "refresh_token_here"
  }
}
```

#### Refresh Token
`POST /api/auth/refresh-token`

**Request:**
```json
{
  "refreshToken": "refresh_token_here"
}
```

**Response:**
```json
{
  "accessToken": "new_jwt_token_here"
}
```

#### Admin Registration (SuperAdmin Only)
`POST /api/auth/admin/register`

**Request:**
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "password123",
  "role": "TEACHER|INTERN",
  "batch_id": 1
}
```

**Response:**
```json
{
  "message": "Admin registered successfully",
  "admin": {
    "id": 2,
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "TEACHER",
    "batch_id": 1,
    "city_id": 1
  }
}
```

---

## Student APIs

### Get Topics with Batch Progress
`GET /api/students/topics`

**Headers:** `Authorization: Bearer <access_token>`

**Response:**
```json
[
  {
    "id": 1,
    "topic_name": "Intro to DataStructure and Algorithms",
    "slug": "intro-to-datastructure-and-algorithms",
    "batchSpecificData": {
      "totalClasses": 4,
      "totalQuestions": 3,
      "solvedQuestions": 2
    }
  },
  {
    "id": 2,
    "topic_name": "Calculating Iterations",
    "slug": "calculating-iterations",
    "batchSpecificData": {
      "totalClasses": 0,
      "totalQuestions": 0,
      "solvedQuestions": 0
    }
  }
]
```

### Get Topic Overview
`GET /api/students/topics/:topicSlug`

**Headers:** `Authorization: Bearer <access_token>`

**Response:**
```json
{
  "id": 13,
  "topic_name": "Maths Primes",
  "slug": "maths-primes",
  "description": null,
  "classes": [
    {
      "id": 2115,
      "class_name": "Topic-13-Batch-8-Class-1",
      "slug": "maths-primes-sot-class-1",
      "duration_minutes": 85,
      "description": "Comprehensive coverage of Maths Primes concepts for SOT",
      "totalQuestions": 4,
      "solvedQuestions": 2
    },
    {
      "id": 2116,
      "class_name": "Topic-13-Batch-8-Class-2",
      "slug": "maths-primes-sot-class-2",
      "duration_minutes": 97,
      "description": "Maths Primes fundamentals and advanced topics",
      "totalQuestions": 3,
      "solvedQuestions": 1
    }
  ],
  "overallProgress": {
    "totalClasses": 2,
    "totalQuestions": 7,
    "solvedQuestions": 3
  }
}
```

#### Get Class Details with Questions
**Endpoint:** `GET /api/students/topics/:topicSlug/classes/:classSlug`
Get detailed class information with all questions and progress.

**Response:**
```json
{
  "id": 1870,
  "class_name": "Topic-21-Batch-9-Class-1",
  "slug": "two-pointers-sot-class-1",
  "description": "Deep dive into Two Pointers problem-solving techniques",
  "duration_minutes": 66,
  "pdf_url": null,
  "class_date": "2025-09-07T06:01:42.699Z",
  "created_at": "2026-03-13T08:58:21.448Z",
  "topic": {
    "id": 21,
    "topic_name": "Two Pointers",
    "slug": "two-pointers"
  },
  "totalQuestions": 5,
  "solvedQuestions": 1,
  "questions": [
    {
      "id": 253,
      "questionName": "Count pairs with given sum",
      "questionLink": "https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum--150253/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card",
      "platform": "GFG",
      "level": "MEDIUM",
      "type": "HOMEWORK",
      "topic": {
        "id": 21,
        "topic_name": "Two Pointers",
        "slug": "two-pointers"
      },
      "isSolved": true,
      "syncAt": "2026-03-13T10:20:17.300Z"
    },
    {
      "id": 264,
      "questionName": "Container With Most Water",
      "questionLink": "https://leetcode.com/problems/container-with-most-water/description/",
      "platform": "LEETCODE",
      "level": "MEDIUM",
      "type": "CLASSWORK",
      "topic": {
        "id": 21,
        "topic_name": "Two Pointers",
        "slug": "two-pointers"
      },
      "isSolved": false,
      "syncAt": null
    }
  ]
}
```

#### Get All Questions with Filters
**Endpoint:** `GET /api/students/addedQuestions`
Get all questions with filtering options and solved status.

**Query Parameters:**
- `search`: Search by question name
- `topic`: Filter by topic name
- `level`: Filter by difficulty (EASY, MEDIUM, HARD)
- `platform`: Filter by platform (LEETCODE, GFG, INTERVIEWBIT, OTHER)
- `type`: Filter by question type (HOMEWORK, CLASSWORK)
- `status`: Filter by solved status (solved, unsolved)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)

**Example:** `GET /api/students/addedQuestions?level=EASY&status=solved&page=1&limit=10`

**Response:**
```json
{
  "questions": [
    {
      "id": 36,
      "question_name": "Sum of All Odd Length Subarrays",
      "question_link": "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/",
      "platform": "LEETCODE",
      "level": "MEDIUM",
      "type": "HOMEWORK",
      "topic_id": 10,
      "created_at": "2026-03-11T18:34:10.307Z",
      "topic": {
        "id": 10,
        "topic_name": "Subarray",
        "slug": "subarray"
      },
      "isSolved": true,
      "syncAt": "2026-03-13T10:19:16.766Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalQuestions": 1,
    "totalPages": 1
  },
  "filters": {
    "topics": [
      {
        "id": 10,
        "topic_name": "Subarray",
        "slug": "subarray"
      }
    ],
    "levels": [
      "EASY",
      "MEDIUM",
      "HARD"
    ],
    "platforms": [
      "LEETCODE",
      "GFG",
      "OTHER",
      "INTERVIEWBIT"
    ],
    "types": [
      "HOMEWORK",
      "CLASSWORK"
    ]
  },
  "stats": {
    "total": 1,
    "solved": 1
  }
}
```

#### Get Student Leaderboard
**Endpoint:** `POST /api/students/leaderboard`
Get leaderboard with top 10 students and student's personal rank.

**Request:**
```json
{
  "city": "all|city_name",
  "type": "weekly|monthly|all",
  "year": 2024
}
```

**Query Parameters:**
- `username`: Search by username (optional)

**Response:**
```json
{
  "success": true,
  "top10": [
    {
      "student_id": 1,
      "name": "John Doe",
      "username": "johndoe",
      "batch_year": 2024,
      "city_name": "New York",
      "max_streak": 5,
      "easy_solved": 85.5,
      "medium_solved": 72.3,
      "hard_solved": 45.8,
      "total_solved": 67.87,
      "rank": 1
    }
  ],
  "yourRank": {
    "rank": 15,
    "student_id": 15,
    "name": "Jane Smith",
    "username": "janesmith",
    "batch_year": 2024,
    "city_name": "New York",
    "max_streak": 3,
    "easy_solved": 65.2,
    "medium_solved": 58.9,
    "hard_solved": 32.1,
    "total_solved": 52.07
  },
  "message": null,
  "filters": {
    "city": "all",
    "year": 2024,
    "type": "all"
  }
}
```

#### Get Student Profile
**Endpoint:** `GET /api/students/profile`
Get complete student profile with all sections.

**Headers:** `Authorization: Bearer <access_token>`

**Response:**
```json
{
  "student": {
    "name": "Dhruv",
    "username": "dhruv244",
    "email": "dhruv@example.com",
    "enrollmentId": "ENR123",
    "city": "Noida",
    "batch": "SOT",
    "year": 2025,
    "github": "dhruv244",
    "linkedin": "https://linkedin.com/in/dhruv244",
    "leetcode": "dhruv608",
    "gfg": "dhruv608"
  },
  "codingStats": {
    "totalSolved": 243,
    "totalAssigned": 741,
    "easy": {
      "assigned": 215,
      "solved": 118
    },
    "medium": {
      "assigned": 388,
      "solved": 104
    },
    "hard": {
      "assigned": 138,
      "solved": 21
    }
  },
  "streak": {
    "currentStreak": 1,
    "maxStreak": 1
  },
  "leaderboard": {
    "globalRank": 3,
    "cityRank": 1
  },
  "heatmap": [
    {
      "date": "2026-03-13T00:00:00.000Z",
      "count": 243
    }
  ],
  "recentActivity": [
    {
      "problemTitle": "Word Search",
      "difficulty": "MEDIUM",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    },
    {
      "problemTitle": "Subsets II",
      "difficulty": "MEDIUM",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    },
    {
      "problemTitle": "Generate Parentheses",
      "difficulty": "EASY",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    },
    {
      "problemTitle": "House Robber",
      "difficulty": "MEDIUM",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    },
    {
      "problemTitle": "Unique Paths",
      "difficulty": "EASY",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    }
  ]
}
```

#### Get Public Student Profile
**Endpoint:** `GET /api/students/profile/:username`
Get public student profile by username (no authentication required).

**Response:**
```json
{
  "student": {
    "name": "Dhruv",
    "username": "dhruv244",
    "city": "Noida",
    "batch": "SOT",
    "year": 2025,
    "github": "dhruv244",
    "linkedin": "https://linkedin.com/in/dhruv244",
    "leetcode": "dhruv608",
    "gfg": "dhruv608"
  },
  "codingStats": {
    "totalSolved": 243,
    "totalAssigned": 741,
    "easy": {
      "assigned": 215,
      "solved": 118
    },
    "medium": {
      "assigned": 388,
      "solved": 104
    },
    "hard": {
      "assigned": 138,
      "solved": 21
    }
  },
  "streak": {
    "currentStreak": 1,
    "maxStreak": 1
  },
  "leaderboard": {
    "globalRank": 3,
    "cityRank": 1
  },
  "heatmap": [
    {
      "date": "2026-03-13T00:00:00.000Z",
      "count": 243
    }
  ],
  "recentActivity": [
    {
      "problemTitle": "Word Search",
      "difficulty": "MEDIUM",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    },
    {
      "problemTitle": "Subsets II",
      "difficulty": "MEDIUM",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    },
    {
      "problemTitle": "Generate Parentheses",
      "difficulty": "EASY",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    },
    {
      "problemTitle": "House Robber",
      "difficulty": "MEDIUM",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    },
    {
      "problemTitle": "Unique Paths",
      "difficulty": "EASY",
      "solvedAt": "2026-03-13T10:20:17.300Z"
    }
  ]
}
```

---

## Admin APIs

### Base URL: `/api/admin`

All endpoints require `Authorization: Bearer <access_token>` header and appropriate ADMIN role.

### Role-Based Access:
- **SuperAdmin**: Full access to all endpoints
- **Teacher**: Access to most endpoints (marked as Teacher+)
- **Intern**: Limited read access only

#### Get Cities
**Endpoint:** `GET /api/admin/cities`
Get all available cities.

**Response:**
```json
{
  "cities": [
    {
      "id": 1,
      "city_name": "New York",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### Get Batches
**Endpoint:** `GET /api/admin/batches`
Get all batches with optional filters.

**Query Parameters:**
- `city_id`: Filter by city ID
- `year`: Filter by batch year

**Response:**
```json
{
  "batches": [
    {
      "id": 1,
      "batch_name": "Batch 2024",
      "slug": "batch-2024",
      "year": 2024,
      "city_id": 1,
      "city": {
        "city_name": "New York"
      },
      "easy_assigned": 215,
      "medium_assigned": 388,
      "hard_assigned": 138,
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### Get Topics
**Endpoint:** `GET /api/admin/topics`
Get all topics.

**Response:**
```json
{
  "topics": [
    {
      "id": 1,
      "topic_name": "Arrays",
      "slug": "arrays",
      "description": "Array data structures and algorithms",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### Create Topic (Teacher+)
**Endpoint:** `POST /api/admin/topics`
Create a new topic (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Request:**
```json
{
  "topic_name": "String Manipulation",
  "slug": "string-manipulation",
  "description": "String processing algorithms"
}
```

**Response:**
```json
{
  "message": "Topic created successfully",
  "topic": {
    "id": 2,
    "topic_name": "String Manipulation",
    "slug": "string-manipulation",
    "description": "String processing algorithms"
  }
}
```

#### Update Topic (Teacher+)
**Endpoint:** `PATCH /api/admin/topics/:id`
Update an existing topic (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Request:**
```json
{
  "topic_name": "Advanced String Manipulation",
  "description": "Advanced string processing algorithms"
}
```

**Response:**
```json
{
  "message": "Topic updated successfully",
  "topic": {
    "id": 1,
    "topic_name": "Advanced String Manipulation",
    "slug": "string-manipulation",
    "description": "Advanced string processing algorithms"
  }
}
```

#### Delete Topic (Teacher+)
**Endpoint:** `DELETE /api/admin/topics/:id`
Delete a topic (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Response:**
```json
{
  "message": "Topic deleted successfully"
}
```

#### Get Questions
**Endpoint:** `GET /api/admin/questions`
Get all questions with optional filters.

**Query Parameters:**
- `level`: Filter by difficulty (EASY, MEDIUM, HARD)
- `platform`: Filter by platform (LEETCODE, GFG, CODESTUDIO)
- `topic_id`: Filter by topic ID
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)

**Response:**
```json
{
  "questions": [
    {
      "id": 1,
      "question_name": "Two Sum",
      "level": "EASY",
      "platform": "LEETCODE",
      "platform_question_id": "1",
      "link": "https://leetcode.com/problems/two-sum/",
      "topic": {
        "id": 1,
        "topic_name": "Arrays",
        "slug": "arrays"
      },
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

#### Create Question (Teacher+)
**Endpoint:** `POST /api/admin/questions`
Create a new question (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Request:**
```json
{
  "question_name": "Three Sum",
  "level": "MEDIUM",
  "platform": "LEETCODE",
  "platform_question_id": "15",
  "link": "https://leetcode.com/problems/3sum/",
  "topic_id": 1
}
```

**Response:**
```json
{
  "message": "Question created successfully",
  "question": {
    "id": 2,
    "question_name": "Three Sum",
    "level": "MEDIUM",
    "platform": "LEETCODE",
    "platform_question_id": "15",
    "link": "https://leetcode.com/problems/3sum/",
    "topic_id": 1
  }
}
```

#### Update Question (Teacher+)
**Endpoint:** `PATCH /api/admin/questions/:id`
Update an existing question (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Response:**
```json
{
  "message": "Question updated successfully",
  "question": {
    "id": 2,
    "question_name": "Updated Three Sum",
    "level": "HARD",
    "platform": "LEETCODE",
    "platform_question_id": "15",
    "link": "https://leetcode.com/problems/3sum/",
    "topic_id": 1
  }
}
```

#### Delete Question (Teacher+)
**Endpoint:** `DELETE /api/admin/questions/:id`
Delete a question (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Response:**
```json
{
  "message": "Question deleted successfully"
}
```

#### Bulk Upload Questions (Teacher+)
**Endpoint:** `POST /api/admin/questions/bulk-upload`
Upload multiple questions via CSV file (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Request:** `multipart/form-data` with `file` (CSV)

**CSV Format:**
```csv
question_name,level,platform,platform_question_id,link,topic_slug
Two Sum,EASY,LEETCODE,1,https://leetcode.com/problems/two-sum/,arrays
```

**Response:**
```json
{
  "message": "Questions uploaded successfully",
  "results": {
    "totalProcessed": 10,
    "successCount": 8,
    "failureCount": 2,
    "failures": [
      {
        "row": 3,
        "error": "Invalid topic slug"
      }
    ]
  }
}
```

#### Get Admin Stats
**Endpoint:** `POST /api/admin/stats`
Get comprehensive admin statistics.

**Request:**
```json
{
  "batch_id": 1,
  "city_id": 1
}
```

**Response:**
```json
{
  "stats": {
    "totalStudents": 150,
    "activeStudents": 120,
    "totalQuestions": 500,
    "averageProgress": 65.5,
    "topPerformers": [
      {
        "student_id": 1,
        "name": "John Doe",
        "totalSolved": 245,
        "completionPercentage": 85.2
      }
    ],
    "batchStats": {
      "totalStudents": 150,
      "averageProgress": 65.5,
      "easyCompletion": 75.3,
      "mediumCompletion": 60.8,
      "hardCompletion": 45.2
    }
  }
}
```

#### Get Admin Leaderboard
**Endpoint:** `POST /api/admin/leaderboard`
Get admin leaderboard with pagination and search.

**Request:**
```json
{
  "city": "all|city_name",
  "type": "weekly|monthly|all",
  "year": 2024,
  "page": 1,
  "limit": 20,
  "search": "john"
}
```

**Response:**
```json
{
  "leaderboard": [
    {
      "student_id": 1,
      "name": "John Doe",
      "username": "johndoe",
      "batch_year": 2024,
      "city_name": "New York",
      "max_streak": 5,
      "easy_solved": 85.5,
      "medium_solved": 72.3,
      "hard_solved": 45.8,
      "total_solved": 67.87,
      "rank": 1
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

#### Get Students
**Endpoint:** `GET /api/admin/students`
Get all students with optional filters.

**Query Parameters:**
- `batch_id`: Filter by batch ID
- `city_id`: Filter by city ID
- `search`: Search by name or username
- `page`: Page number
- `limit`: Items per page

**Response:**
```json
{
  "students": [
    {
      "id": 1,
      "name": "John Doe",
      "username": "johndoe",
      "email": "john@example.com",
      "enrollment_id": "ENR123",
      "batch": {
        "id": 1,
        "batch_name": "Batch 2024",
        "year": 2024
      },
      "city": {
        "id": 1,
        "city_name": "New York"
      },
      "leetcode_id": "john123",
      "gfg_id": "john456",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

#### Create Student (Teacher+)
**Endpoint:** `POST /api/admin/students`
Create a new student (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Request:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "username": "janesmith",
  "password": "password123",
  "batch_id": 1,
  "leetcode_id": "jane456",
  "gfg_id": "jane789",
  "github": "janesmith",
  "linkedin": "https://linkedin.com/in/janesmith",
  "enrollment_id": "ENR456"
}
```

**Response:**
```json
{
  "message": "Student created successfully",
  "student": {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "username": "janesmith",
    "batch_id": 1,
    "city_id": 1,
    "leetcode_id": "jane456",
    "gfg_id": "jane789",
    "github": "janesmith",
    "linkedin": "https://linkedin.com/in/janesmith",
    "enrollment_id": "ENR456"
  }
}
```

#### Update Student (Teacher+)
**Endpoint:** `PATCH /api/admin/students/:id`
Update student details (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Response:**
```json
{
  "message": "Student updated successfully",
  "student": {
    "id": 2,
    "name": "Jane Updated",
    "email": "jane.updated@example.com",
    "username": "janesmith",
    "batch_id": 1,
    "city_id": 1,
    "leetcode_id": "jane456",
    "gfg_id": "jane789",
    "github": "janeupdated",
    "linkedin": "https://linkedin.com/in/janeupdated",
    "enrollment_id": "ENR456"
  }
}
```

#### Delete Student (Teacher+)
**Endpoint:** `DELETE /api/admin/students/:id`
Delete a student (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Response:**
```json
{
  "message": "Student deleted successfully"
}
```

---

## Batch-Specific Admin APIs

### Base URL: `/api/admin/:batchSlug`

All endpoints require `Authorization: Bearer <access_token>` header and ADMIN role.

#### Get Topics for Batch
**Endpoint:** `GET /api/admin/:batchSlug/topics`
Get all topics for a specific batch.

**Response:**
```json
{
  "topics": [
    {
      "id": 1,
      "topic_name": "Arrays",
      "slug": "arrays",
      "description": "Array data structures and algorithms",
      "classCount": 5,
      "questionCount": 25
    }
  ]
}
```

#### Get Classes by Topic
**Endpoint:** `GET /api/admin/:batchSlug/topics/:topicSlug/classes`
Get all classes for a specific topic in a batch.

**Response:**
```json
{
  "classes": [
    {
      "id": 1,
      "class_name": "Basic Arrays",
      "slug": "basic-arrays",
      "duration_minutes": 120,
      "description": "Introduction to arrays",
      "totalQuestions": 10,
      "solvedQuestions": 7,
      "pdf_url": "https://example.com/notes.pdf"
    }
  ]
}
```

#### Create Class in Topic
**Endpoint:** `POST /api/admin/:batchSlug/topics/:topicSlug/classes`
Create a new class under a topic (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Request:**
```json
{
  "class_name": "Advanced Arrays",
  "description": "Advanced array concepts",
  "duration_minutes": 90,
  "pdf_url": "https://example.com/advanced-arrays.pdf"
}
```

**Response:**
```json
{
  "message": "Class created successfully",
  "class": {
    "id": 2,
    "class_name": "Advanced Arrays",
    "slug": "advanced-arrays",
    "duration_minutes": 90,
    "description": "Advanced array concepts",
    "pdf_url": "https://example.com/advanced-arrays.pdf"
  }
}
```

#### Get Class Details
**Endpoint:** `GET /api/admin/:batchSlug/topics/:topicSlug/classes/:classSlug`
Get detailed class information.

**Response:**
```json
{
  "id": 1,
  "class_name": "Basic Arrays",
  "slug": "basic-arrays",
  "duration_minutes": 120,
  "description": "Introduction to arrays",
  "totalQuestions": 10,
  "solvedQuestions": 7,
  "pdf_url": "https://example.com/notes.pdf",
  "questions": [
    {
      "id": 1,
      "question_name": "Two Sum",
      "level": "EASY",
      "platform": "LEETCODE",
      "type": "HOMEWORK",
      "isAssigned": true
    }
  ]
}
```

#### Update Class
**Endpoint:** `PATCH /api/admin/:batchSlug/topics/:topicSlug/classes/:classSlug`
Update class details (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Request:**
```json
{
  "class_name": "Updated Basic Arrays",
  "description": "Updated description",
  "duration_minutes": 130,
  "pdf_url": "https://example.com/updated-notes.pdf"
}
```

**Response:**
```json
{
  "message": "Class updated successfully",
  "class": {
    "id": 1,
    "class_name": "Updated Basic Arrays",
    "slug": "basic-arrays",
    "duration_minutes": 130,
    "description": "Updated description",
    "pdf_url": "https://example.com/updated-notes.pdf"
  }
}
```

#### Delete Class
**Endpoint:** `DELETE /api/admin/:batchSlug/topics/:topicSlug/classes/:classSlug`
Delete a class (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Response:**
```json
{
  "message": "Class deleted successfully"
}
```

#### Assign Questions to Class
**Endpoint:** `POST /api/admin/:batchSlug/topics/:topicSlug/classes/:classSlug/questions`
Assign questions to a class (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Request:**
```json
{
  "questionIds": [1, 2, 3, 4, 5]
}
```

**Response:**
```json
{
  "message": "Questions assigned to class successfully",
  "assignedCount": 5
}
```

#### Get Assigned Questions of Class
**Endpoint:** `GET /api/admin/:batchSlug/topics/:topicSlug/classes/:classSlug/questions`
Get all questions assigned to a class.

**Response:**
```json
{
  "questions": [
    {
      "id": 1,
      "question_name": "Two Sum",
      "level": "EASY",
      "platform": "LEETCODE",
      "type": "HOMEWORK",
      "isAssigned": true
    }
  ]
}
```

#### Remove Question from Class
**Endpoint:** `DELETE /api/admin/:batchSlug/topics/:topicSlug/classes/:classSlug/questions/:questionId`
Remove a question from a class (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Response:**
```json
{
  "message": "Question removed from class successfully"
}
```

#### Add Student Progress (Teacher+)
**Endpoint:** `POST /api/admin/students/progress`
Manually add/update student progress (Teacher and SuperAdmin only).

**Required Roles:** Teacher, SuperAdmin

**Request:**
```json
{
  "student_id": 1,
  "question_id": 1,
  "status": "SOLVED",
  "solved_at": "2024-01-01T10:00:00.000Z"
}
```

**Response:**
```json
{
  "message": "Student progress updated successfully",
  "progress": {
    "id": 123,
    "student_id": 1,
    "question_id": 1,
    "status": "SOLVED",
    "solved_at": "2024-01-01T10:00:00.000Z",
    "sync_at": "2024-01-01T10:00:00.000Z"
  }
}
```

#### Manual Sync Student
**Endpoint:** `POST /api/admin/students/sync/:id`
Manually sync student progress from external platforms.

**Response:**
```json
{
  "message": "Student sync completed successfully",
  "results": {
    "leetcode": {
      "synced": 15,
      "updated": 12,
      "failed": 3
    },
    "gfg": {
      "synced": 10,
      "updated": 8,
      "failed": 2
    },
    "totalProgress": 25
  }
}
```

#### Bulk Student Upload
**Endpoint:** `POST /api/admin/bulk-operations`
Bulk upload students via CSV file.

**Request:** `multipart/form-data` with `file` (CSV)

**CSV Format:**
```csv
name,email,username,password,batch_id,leetcode_id,gfg_id,github,linkedin,enrollment_id
John Doe,john@example.com,johndoe,password123,1,john123,john456,johndoe,https://linkedin.com/in/johndoe,ENR123
```

**Response:**
```json
{
  "message": "Students uploaded successfully",
  "results": {
    "totalProcessed": 50,
    "successCount": 45,
    "failureCount": 5,
    "failures": [
      {
        "row": 3,
        "error": "Email already exists"
      }
    ]
  }
}
```

#### Download Batch Report
**Endpoint:** `POST /api/admin/student/reportdownload`
Download batch report in CSV format.

**Request:**
```json
{
  "batch_id": 1,
  "format": "csv"
}
```

**Response:** CSV file download with headers:
```
Content-Type: text/csv
Content-Disposition: attachment; filename="batch_report_2024-01-01.csv"
```

**CSV Content:**
```csv
student_id,name,email,username,total_solved,easy_solved,medium_solved,hard_solved,completion_percentage
1,John Doe,john@example.com,johndoe,245,118,104,21,65.5
2,Jane Smith,jane@example.com,janesmith,189,95,72,22,50.8
```

---

## SuperAdmin APIs

### Base URL: `/api/superadmin`

All endpoints require `Authorization: Bearer <access_token>` header and SUPERADMIN role.

### Role-Based Access:
- **SuperAdmin**: Full access to all SuperAdmin endpoints
- **Teacher/Intern**: No access to SuperAdmin endpoints

#### Create City
**Endpoint:** `POST /api/superadmin/cities`
Create a new city.

**Request:**
```json
{
  "city_name": "Boston"
}
```

**Response:**
```json
{
  "message": "City created successfully",
  "city": {
    "id": 2,
    "city_name": "Boston"
  }
}
```

#### Get All Cities
**Endpoint:** `GET /api/superadmin/cities`
Get all cities.

**Response:**
```json
{
  "cities": [
    {
      "id": 1,
      "city_name": "New York"
    },
    {
      "id": 2,
      "city_name": "Boston"
    }
  ]
}
```

#### Delete City
**Endpoint:** `DELETE /api/superadmin/cities/:id`
Delete a city.

**Response:**
```json
{
  "message": "City deleted successfully"
}
```

#### Create Batch
**Endpoint:** `POST /api/superadmin/batches`
Create a new batch.

**Request:**
```json
{
  "batch_name": "Batch 2025",
  "slug": "batch-2025",
  "year": 2025,
  "city_id": 1,
  "easy_assigned": 250,
  "medium_assigned": 400,
  "hard_assigned": 150
}
```

**Response:**
```json
{
  "message": "Batch created successfully",
  "batch": {
    "id": 2,
    "batch_name": "Batch 2025",
    "slug": "batch-2025",
    "year": 2025,
    "city_id": 1,
    "easy_assigned": 250,
    "medium_assigned": 400,
    "hard_assigned": 150
  }
}
```

#### Get All Batches
**Endpoint:** `GET /api/superadmin/batches`
Get all batches.

**Response:**
```json
{
  "batches": [
    {
      "id": 1,
      "batch_name": "Batch 2024",
      "slug": "batch-2024",
      "year": 2024,
      "city_id": 1,
      "city": {
        "city_name": "New York"
      },
      "easy_assigned": 215,
      "medium_assigned": 388,
      "hard_assigned": 138
    }
  ]
}
```

#### Update Batch
**Endpoint:** `PATCH /api/superadmin/batches/:id`
Update batch details.

**Response:**
```json
{
  "message": "Batch updated successfully",
  "batch": {
    "id": 1,
    "batch_name": "Updated Batch 2024",
    "slug": "batch-2024",
    "year": 2024,
    "city_id": 1,
    "easy_assigned": 220,
    "medium_assigned": 390,
    "hard_assigned": 138
  }
}
```

#### Delete Batch
**Endpoint:** `DELETE /api/superadmin/batches/:id`
Delete a batch.

**Response:**
```json
{
  "message": "Batch deleted successfully"
}
```

#### Create Admin
**Endpoint:** `POST /api/superadmin/admins`
Create a new admin (SuperAdmin role auto-assigned).

**Request:**
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "username": "adminuser",
  "password": "password123",
  "batch_id": 1
}
```

**Response:**
```json
{
  "message": "Admin created successfully",
  "admin": {
    "id": 2,
    "name": "Admin User",
    "email": "admin@example.com",
    "username": "adminuser",
    "role": "SUPERADMIN",
    "batch_id": 1,
    "city_id": 1
  }
}
```

#### Get All Admins
**Endpoint:** `GET /api/superadmin/admins`
Get all admins with optional filters.

**Query Parameters:**
- `role`: Filter by role (SUPERADMIN, TEACHER, INTERN)
- `batch_id`: Filter by batch ID
- `city_id`: Filter by city ID
- `search`: Search by name or username

**Response:**
```json
{
  "admins": [
    {
      "id": 1,
      "name": "John Admin",
      "email": "john.admin@example.com",
      "username": "johnadmin",
      "role": "TEACHER",
      "batch": {
        "id": 1,
        "batch_name": "Batch 2024",
        "year": 2024
      },
      "city": {
        "id": 1,
        "city_name": "New York"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 15,
    "totalPages": 1
  }
}
```

#### Update Admin
**Endpoint:** `PATCH /api/superadmin/admins/:id`
Update admin details (only role and batch_id allowed for SuperAdmin).

**Response:**
```json
{
  "message": "Admin updated successfully",
  "admin": {
    "id": 1,
    "name": "John Admin",
    "email": "john.admin@example.com",
    "username": "johnadmin",
    "role": "TEACHER",
    "batch_id": 2,
    "city_id": 1
  }
}
```

#### Delete Admin
**Endpoint:** `DELETE /api/superadmin/admins/:id`
Delete an admin.

**Response:**
```json
{
  "message": "Admin deleted successfully"
}
```

#### Get System Stats
**Endpoint:** `GET /api/superadmin/stats`
Get comprehensive system statistics.

**Response:**
```json
{
  "stats": {
    "totalCities": 10,
    "totalBatches": 25,
    "totalStudents": 2500,
    "totalAdmins": 50,
    "totalQuestions": 1000,
    "totalTopics": 20
  }
}
```

---

## Common Response Formats

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "details": "Additional error details (optional)"
}
```

### Common Error Examples

#### 400 Bad Request
```json
{
  "success": false,
  "error": "Invalid request data",
  "details": "Email is required"
}
```

#### 401 Unauthorized
```json
{
  "success": false,
  "error": "Authentication required",
  "details": "Invalid or missing access token"
}
```

#### 403 Forbidden
```json
{
  "success": false,
  "error": "Insufficient permissions",
  "details": "User role does not have access to this resource"
}
```

#### 404 Not Found
```json
{
  "success": false,
  "error": "Resource not found",
  "details": "Student with ID 999 does not exist"
}
```

#### 409 Conflict
```json
{
  "success": false,
  "error": "Resource already exists",
  "details": "Email already registered"
}
```

#### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal server error",
  "details": "Database connection failed"
}
```

### Pagination Response
```json
{
  "data": [ ... ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

---






