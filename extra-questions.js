// Câu chữ và thứ tự lựa chọn được giữ theo từng tài liệu.
window.EXTRA_QUESTIONS = [
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q10",
    "q": "[C2_Q10] Microkernel có xu hướng thiết kế như thế nào?",
    "a": [
      "Không cho phép quản lý tiến trình",
      "Loại bỏ cơ chế truyền thông",
      "Giữ kernel nhỏ, chuyển nhiều dịch vụ ra không gian người dùng",
      "Đưa toàn bộ ứng dụng văn phòng vào kernel"
    ],
    "correct": 2,
    "why": "Microkernel giữ nhân nhỏ, dịch vụ chuyển ra user space.; Ưu: dễ bảo trì/cô lập lỗi; nhược: tăng chi phí IPC.",
    "ref": "Trang 1",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q11",
    "q": "[C2_Q11] Ưu điểm thường gặp của microkernel là gì?",
    "a": [
      "Không cần bộ nhớ",
      "Dễ mở rộng, dễ bảo trì và tăng tính cô lập lỗi",
      "Không cần truyền thông giữa thành phần",
      "Luôn nhanh hơn mọi kernel khác trong mọi trường hợp"
    ],
    "correct": 1,
    "why": "Ý chính: Dễ mở rộng, dễ bảo trì và tăng tính cô lập lỗi.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Trang 1",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q23",
    "q": "[C5_Q23] Trong bài toán Readers-Writers, quy tắc cơ bản là gì?",
    "a": [
      "Reader không bao giờ được đọc",
      "Nhiều writer luôn ghi đồng thời không cần khóa",
      "Writer không bao giờ được ghi",
      "Nhiều reader có thể đọc đồng thời, nhưng writer cần quyền truy cập độc quyền"
    ],
    "correct": 3,
    "why": "Readers-Writers: nhiều reader có thể cùng đọc, writer phải độc quyền.; Thiết kế ưu tiên reader/writer không hợp lý có thể gây starvation.",
    "ref": "Trang 1",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q23",
    "q": "[C4_Q23] Định thời thời gian thực hard real-time yêu cầu điều gì?",
    "a": [
      "Có thể trễ tùy ý",
      "Chỉ cần giao diện đẹp",
      "Không cần deadline",
      "Phải đáp ứng đúng hạn chặt chẽ"
    ],
    "correct": 3,
    "why": "Hard real-time: trễ deadline có thể là lỗi hệ thống nghiêm trọng.; Soft real-time: trễ deadline làm giảm chất lượng nhưng không nhất thiết thất bại.",
    "ref": "Trang 1",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q06",
    "q": "[C3_Q06] Trạng thái Waiting/Blocked thường xảy ra khi nào?",
    "a": [
      "Tiến trình không tồn tại",
      "Tiến trình đang chiếm CPU",
      "Tiến trình đã hoàn tất mọi công việc",
      "Tiến trình chờ I/O hoặc chờ một sự kiện"
    ],
    "correct": 3,
    "why": "Ý chính: Tiến trình chờ I/O hoặc chờ một sự kiện.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 1",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q24",
    "q": "[C4_Q24] EDF (Earliest Deadline First) chọn công việc nào trước?",
    "a": [
      "Công việc có thời hạn gần nhất",
      "Công việc có tên dài nhất",
      "Công việc có PID lớn nhất",
      "Công việc có thời hạn xa nhất"
    ],
    "correct": 0,
    "why": "EDF = Earliest Deadline First: deadline gần nhất được ưu tiên.; Hard real-time yêu cầu đáp ứng hạn chót nghiêm ngặt.",
    "ref": "Trang 1",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q16",
    "q": "[C5_Q16] Hai thao tác cơ bản của semaphore là gì?",
    "a": [
      "start() và shutdown()",
      "read() và print()",
      "wait() và signal()",
      "open() và close()"
    ],
    "correct": 2,
    "why": "Ý chính: wait() và signal().; Critical section: đoạn mã truy cập dữ liệu chung; race condition do thứ tự thực thi xen kẽ.",
    "ref": "Trang 2",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q06",
    "q": "[C5_Q06] Yêu cầu tiến triển (progress) trong bài toán miền tương trục nghĩa gì?",
    "a": [
      "CPU phải luôn tắt khi có tranh chấp",
      "Tiến trình không được truy cập dữ liệu",
      "Tiến trình luôn phải chạy theo FIFO",
      "Nếu miền tương trục đang rỗng và có tiến trình muốn vào, việc lựa chọn không bị trì hoãn vô hạn"
    ],
    "correct": 3,
    "why": "Ý chính: Nếu miền tương trục đang rỗng và có tiến trình muốn vào, việc lựa chọn không bị trì hoãn vô hạn.; Semaphore: wait()/signal(); mutex bảo vệ vùng tới hạn; busy waiting tiêu tốn CPU.",
    "ref": "Trang 2",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q10",
    "q": "[C1_Q10] Quản lý tập tin của hệ điều hành bao gồm công việc nào?",
    "a": [
      "Chỉ thay đổi độ sáng màn hình",
      "Chỉ quản lý chuột",
      "Chỉ tính toán lịch CPU",
      "Tạo, xóa, đọc, ghi và tổ chức tập tin/thư mục"
    ],
    "correct": 3,
    "why": "Ý chính: Tạo, xóa, đọc, ghi và tổ chức tập tin/thư mục.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Trang 2",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q03",
    "q": "[C2_Q03] Giao diện dòng lệnh (CLI) có đặc điểm nào?",
    "a": [
      "Người dùng nhập lệnh dạng văn bản để yêu cầu hệ thống thực hiện công việc",
      "Không cho phép chạy chương trình",
      "Chỉ thao tác bằng cảm biến vân tay",
      "Luôn cần màn hình cảm ứng"
    ],
    "correct": 0,
    "why": "Ý chính: Người dùng nhập lệnh dạng văn bản để yêu cầu hệ thống thực hiện công việc.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Trang 2",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q05",
    "q": "[C4_Q05] Thời gian quay vòng (turnaround time) được tính như thế nào?",
    "a": [
      "Thời điểm hoàn thành trừ thời điểm đến",
      "Thời điểm đến trừ thời điểm hoàn thành",
      "Thời gian chờ trừ burst time",
      "Burst time trừ thời điểm đến"
    ],
    "correct": 0,
    "why": "Turnaround time = completion time − arrival time.; Waiting time = turnaround − tổng CPU burst (trong bài toán chỉ có CPU burst).",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q13",
    "q": "[C5_Q13] Test-and-Set là loại thao tác gì?",
    "a": [
      "Thao tác sao chép hình ảnh",
      "Thao tác đổi tên thư mục",
      "Thao tác nguyên tử dùng để kiểm tra và đặt khóa",
      "Thao tác tắt màn hình"
    ],
    "correct": 2,
    "why": "Test-and-Set là thao tác nguyên tử đọc giá trị cũ và đặt giá trị mới.; Dùng xây dựng spinlock; có thể gây busy waiting.",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q04",
    "q": "[C4_Q04] Thời gian chờ (waiting time) là gì?",
    "a": [
      "Thời gian tiến trình dùng thiết bị mạng",
      "Thời gian tắt màn hình",
      "Thời gian hệ thống khởi động BIOS",
      "Tổng thời gian tiến trình chờ trong hàng đợi sẵn sàng"
    ],
    "correct": 3,
    "why": "Ý chính: Tổng thời gian tiến trình chờ trong hàng đợi sẵn sàng.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q14",
    "q": "[C2_Q14] Trình điều khiển thiết bị (device driver) có vai trò gì?",
    "a": [
      "Chỉ để thay đổi hình nền",
      "Giúp hệ điều hành giao tiếp và điều khiển thiết bị phần cứng",
      "Chỉ tạo tài khoản người dùng",
      "Chỉ dùng để lưu mật khẩu"
    ],
    "correct": 1,
    "why": "Ý chính: Giúp hệ điều hành giao tiếp và điều khiển thiết bị phần cứng.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q15",
    "q": "[C1_Q15] Khi một chương trình cần đọc tập tin, nó thường phải thông qua cơ chế nào của hệ điều hành?",
    "a": [
      "Thay đổi độ phân giải",
      "Đổi hình nền",
      "System call",
      "Tắt màn hình"
    ],
    "correct": 2,
    "why": "Ý chính: System call.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q18",
    "q": "[C5_Q18] Counting semaphore phù hợp để làm gì?",
    "a": [
      "Đổi tên biến",
      "Quản lý nhiều tài nguyên giống nhau có số lượng hữu hạn",
      "Chỉ bảo vệ một tài nguyên duy nhất",
      "Xóa tiến trình khỏi hàng đợi"
    ],
    "correct": 1,
    "why": "Counting semaphore dùng để quản lý số lượng hữu hạn tài nguyên giống nhau.; Binary semaphore chỉ có 0/1; semaphore cần thao tác nguyên tử.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q02",
    "q": "[C1_Q02] Hệ điều hành đóng vai trò trung gian giữa các đối tượng nào?",
    "a": [
      "Bộ nhớ ngoài và bàn phím",
      "Người dùng/chương trình ứng dụng và phần cứng máy tính",
      "Trình duyệt web và máy in",
      "Tập tin và thư mục"
    ],
    "correct": 1,
    "why": "Ý chính: Người dùng/chương trình ứ.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q17",
    "q": "[C4_Q17] Aging dùng để làm gì?",
    "a": [
      "Tăng dần ưu tiên của tiến trình chờ lâu để giảm starvation",
      "Giảm tốc độ CPU",
      "Tăng kích thước màn hình",
      "Xóa hàng đợi sẵn sàng"
    ],
    "correct": 0,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q17",
    "q": "[C3_Q17] Lợi ích của đa luồng là gì?",
    "a": [
      "Loại bỏ nhu cầu đồng bộ hóa",
      "Tăng khả năng đáp ứng và tận dụng CPU đa lõi tốt hơn",
      "Làm mọi lỗi lập trình biến mất",
      "Không cần hệ điều hành quản lý"
    ],
    "correct": 1,
    "why": "Đa luồng cải thiện responsiveness và khả năng tận dụng CPU đa lõi.; Các luồng chia sẻ dữ liệu nên vẫn cần đồng bộ.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q02",
    "q": "[C4_Q02] Bộ định thời ngắn hạn (short-term scheduler) chọn tiến trình từ đâu?",
    "a": [
      "Thùng rác",
      "Danh bạ người dùng",
      "Hàng đợi sẵn sàng",
      "Bộ nhớ ROM"
    ],
    "correct": 2,
    "why": "Ý chính: Hàng đợi sẵn sàng.; RR chia thời gian theo quantum; quantum quá nhỏ tăng context switch.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q05",
    "q": "[C5_Q05] Yêu cầu loại trừ hỗ tương (mutual exclusion) nghĩa là gì?",
    "a": [
      "Mọi tiến trình phải kết thúc cùng lúc",
      "Tại một thời điểm, chỉ một tiến trình được vào miền tương trục",
      "Không tiến trình nào được chạy",
      "Tất cả tiến trình phải cùng vào miền tương trục"
    ],
    "correct": 1,
    "why": "Ý chính: Tại một thời điểm, chỉ một tiến trình được vào miền tương trục.; Ba yêu cầu: mutual exclusion, progress, bounded waiting.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q08",
    "q": "[C1_Q08] Hệ điều hành đa nhiệm có ý nghĩa gì?",
    "a": [
      "Chỉ cho phép một chương trình chạy duy nhất",
      "Cho phép nhiều tiến trình/chương trình cùng được quản lý và chia sẻ CPU",
      "Không cần thiết bị vào/ra",
      "Không cần bộ nhớ chính"
    ],
    "correct": 1,
    "why": "Ý chính: Cho phép nhiều tiến trình/chương trình cùng được quản lý và chia sẻ CPU.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Trang 5",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q01",
    "q": "[C1_Q01] Vai trò chính của hệ điều hành là gì?",
    "a": [
      "Chỉ dùng để biên dịch chương trình",
      "Quản lý tài nguyên phần cứng và cung cấp môi trường thực thi cho chương trình",
      "Chỉ dùng để thiết kế giao diện đồ họa",
      "Chỉ dùng để soạn thảo văn bản"
    ],
    "correct": 1,
    "why": "Ý chính: Quản lý tài nguyên phần cứng và cung cấp môi trường thực thi cho chương trình.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Trang 5",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q06",
    "q": "[C2_Q06] System call thuộc nhóm quản lý tập tin thường liên quan đến thao tác nào?",
    "a": [
      "Mở, đọc, ghi, đóng và xóa tập tin",
      "Tăng tốc quạt tản nhiệt",
      "Thay đổi font chữ hệ thống",
      "Điều chỉnh độ sáng màn hình"
    ],
    "correct": 0,
    "why": "Ý chính: Mở, đọc, ghi, đóng và xóa tập tin.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Trang 5",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q08",
    "q": "[C5_Q08] Peterson là giải pháp phần mềm kinh điển cho trường hợp nào?",
    "a": [
      "Hai tiến trình tranh chấp miền tương trục",
      "Định thời đĩa",
      "Hàng triệu tiến trình không cần biến chia sẻ",
      "Quản lý tập tin ảnh"
    ],
    "correct": 0,
    "why": "Peterson: thuật toán phần mềm cổ điển cho hai tiến trình.; Dùng flag[] và turn; có busy waiting.",
    "ref": "Trang 5",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q09",
    "q": "[C5_Q09] Bakery Algorithm dùng ý tưởng nào?",
    "a": [
      "Tiến trình có tên dài nhất vào trước",
      "Mỗi tiến trình lấy số thứ tự, số nhỏ hơn được ưu tiên vào trước",
      "Tiến trình dùng nhiều RAM nhất vào trước",
      "Tiến trình vào ngẫu nhiên không kiểm soát"
    ],
    "correct": 1,
    "why": "Bakery Algorithm cấp số thứ tự (ticket) để quyết định lượt vào vùng tới hạn.; Nếu số bằng nhau, dùng PID để phân xử; là giải pháp phần mềm loại trừ tương hỗ.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q11",
    "q": "[C4_Q11] Khó khăn chính khi áp dụng SJF/SRTF trong thực tế là gì?",
    "a": [
      "Khó biết chính xác CPU burst tiếp theo",
      "Không cần bộ định thời",
      "Không thể tính thời gian chờ",
      "Không có hàng đợi sẵn sàng"
    ],
    "correct": 0,
    "why": "SJF/SRTF khó biết trước CPU burst; có thể dự đoán bằng exponential averaging.; SJF không trưng dụng; SRTF có trưng dụng và có thể gây starvation.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q09",
    "q": "[C3_Q09] Trong Linux/Unix, fork() thường dùng để làm gì?",
    "a": [
      "Tạo một tiến trình con từ tiến trình hiện tại",
      "Xóa toàn bộ hệ điều hành",
      "Thay đổi độ phân giải màn hình",
      "Đổi tên máy tính"
    ],
    "correct": 0,
    "why": "Ý chính: Tạo một tiến trình con từ tiến trình hiện tại.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q19",
    "q": "[C3_Q19] IPC (Interprocess Communication) là gì?",
    "a": [
      "Cơ chế giao tiếp giữa các tiến trình",
      "Một loại ổ cứng",
      "Bộ nhớ đệm của màn hình",
      "Một lệnh tắt máy"
    ],
    "correct": 0,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q07",
    "q": "[C4_Q07] Thuật toán FCFS chọn tiến trình theo nguyên tắc nào?",
    "a": [
      "Burst time dài nhất trước",
      "Đến trước phục vụ trước",
      "Ngẫu nhiên tuyệt đối",
      "Ưu tiên thấp nhất trước"
    ],
    "correct": 1,
    "why": "Ý chính: Đến trước phục vụ trước.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q08",
    "q": "[C3_Q08] Chuyển ngữ cảnh quá nhiều có thể gây hậu quả gì?",
    "a": [
      "Tăng overhead và làm giảm hiệu năng hệ thống",
      "Làm CPU biến mất",
      "Tăng dung lượng ổ cứng vật lý",
      "Làm chương trình không cần bộ nhớ"
    ],
    "correct": 0,
    "why": "Context switch lưu/phục hồi trạng thái tiến trình, tạo overhead.; Chuyển ngữ cảnh quá thường xuyên làm giảm thời gian CPU xử lý công việc hữu ích.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q15",
    "q": "[C3_Q15] Luồng (thread) là gì?",
    "a": [
      "Một loại tập tin văn bản",
      "Một thiết bị nhập dữ liệu",
      "Một thư mục hệ thống",
      "Đơn vị thực thi nhẹ bên trong một tiến trình"
    ],
    "correct": 3,
    "why": "Thread là đơn vị thực thi trong process; chia sẻ không gian địa chỉ.; Mỗi thread có stack, thanh ghi và bộ đếm chương trình riêng.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q07",
    "q": "[C1_Q07] Chế độ nhân (kernel mode) có đặc điểm nào?",
    "a": [
      "Chỉ dùng để hiển thị hình nền",
      "Có quyền thực thi các lệnh đặc quyền và truy cập tài nguyên hệ thống",
      "Không được truy cập bộ nhớ",
      "Chỉ cho phép chạy trò chơi"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q03",
    "q": "[C5_Q03] Hậu quả của race condition có thể là gì?",
    "a": [
      "Tăng độ phân giải màn hình",
      "Giảm số lượng tiến trình về 0",
      "Tăng dung lượng ổ cứng",
      "Dữ liệu sai lệch hoặc không nhất quán"
    ],
    "correct": 3,
    "why": "Ý chính: Dữ liệu sai lệch hoặc không nhất quán.; Semaphore: wait()/signal(); mutex bảo vệ vùng tới hạn; busy waiting tiêu tốn CPU.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q01",
    "q": "[C2_Q01] Dịch vụ hệ điều hành là gì?",
    "a": [
      "Các tệp hình ảnh nền",
      "Các phím tắt của trình duyệt",
      "Các chức năng hệ điều hành cung cấp cho chương trình và người dùng",
      "Các dây cáp kết nối phần cứng"
    ],
    "correct": 2,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q16",
    "q": "[C4_Q16] Starvation trong định thời là gì?",
    "a": [
      "Tiến trình luôn được chọn đầu tiên",
      "Bộ nhớ bị xóa hoàn toàn",
      "CPU bị thiếu điện",
      "Một tiến trình chờ quá lâu vì liên tục không được chọn"
    ],
    "correct": 3,
    "why": "Starvation là tiến trình chờ rất lâu vì liên tục không được chọn.; Aging tăng dần độ ưu tiên của tiến trình chờ lâu.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q19",
    "q": "[C5_Q19] Semaphore không chờ bận thường dùng cơ chế nào?",
    "a": [
      "block() và wakeup()",
      "zoom() và rotate()",
      "paint() và draw()",
      "format() và delete()"
    ],
    "correct": 0,
    "why": "Semaphore không chờ bận dùng block() để ngủ và wakeup() để đánh thức.; Khác spinlock: spinlock lặp kiểm tra khóa và tiêu thụ CPU.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q11",
    "q": "[C1_Q11] Hệ điều hành kiểu batch phù hợp nhất với tình huống nào?",
    "a": [
      "Họp trực tuyến",
      "Xử lý các công việc theo lô, ít tương tác trực tiếp với người dùng",
      "Vẽ đồ họa bằng bút cảm ứng",
      "Chơi game tương tác thời gian thực"
    ],
    "correct": 1,
    "why": "Ý chính: Xử lý các công việc theo lô, ít tương tác trực tiếp với người dùng.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q14",
    "q": "[C4_Q14] Nếu quantum quá nhỏ trong Round Robin, điều gì sẽ xảy ra?",
    "a": [
      "Không còn tiến trình nào chờ",
      "Mọi tiến trình chạy song song tuyệt đối",
      "Tăng số lần chuyển ngữ cảnh",
      "CPU không cần định thời"
    ],
    "correct": 2,
    "why": "Quantum quá nhỏ làm tăng context switch và overhead.; Quantum quá lớn làm RR gần FCFS.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q12",
    "q": "[C4_Q12] Round Robin phù hợp với loại hệ thống nào?",
    "a": [
      "Hệ tương tác và chia sẻ thời gian",
      "Hệ không có CPU",
      "Hệ chỉ xử lý một chương trình duy nhất",
      "Hệ không có tiến trình"
    ],
    "correct": 0,
    "why": "Round Robin thích hợp hệ tương tác/time-sharing vì luân phiên cấp CPU.; Quantum ảnh hưởng độ đáp ứng và chi phí chuyển ngữ cảnh.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q13",
    "q": "[C2_Q13] Module kernel giúp ích gì?",
    "a": [
      "Không liên quan đến trình điều khiển thiết bị",
      "Cho phép nạp/gỡ một số chức năng kernel linh hoạt khi cần",
      "Chỉ dùng để vẽ biểu tượng",
      "Làm hệ điều hành mất khả năng mở rộng"
    ],
    "correct": 1,
    "why": "Ý chính: Cho phép nạp/gỡ một số chức năng kernel linh hoạt khi cần.; OS services gồm thực thi chương trình, I/O, quản lý tệp, truyền thông, bảo vệ.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q21",
    "q": "[C4_Q21] Lợi ích của processor affinity là gì?",
    "a": [
      "Tận dụng cache tốt hơn và giảm chi phí chuyển lõi",
      "Không cần bộ nhớ cache",
      "Loại bỏ hoàn toàn cân định thời",
      "Làm mọi tiến trình kết thúc ngay"
    ],
    "correct": 0,
    "why": "Processor affinity giữ tiến trình trên lõi quen thuộc để tận dụng cache.; Load balancing phân bố tải giữa các lõi, đôi khi cần di chuyển tiến trình.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q06",
    "q": "[C1_Q06] Vì sao cần phân biệt chế độ người dùng và chế độ nhân?",
    "a": [
      "Để bảo vệ hệ thống, ngăn chương trình người dùng truy cập trực tiếp tài nguyên nhạy cảm",
      "Để tăng kích thước màn hình",
      "Để làm cho mọi chương trình chạy chậm hơn",
      "Để xóa bỏ hoàn toàn quyền truy cập bộ nhớ"
    ],
    "correct": 0,
    "why": "Ý chính: Để bảo vệ hệ thống, ngăn chương trình người dùng truy cập trực tiếp tài nguyên nhạy cảm.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q09",
    "q": "[C1_Q09] Trong hệ điều hành, quản lý bộ nhớ nhằm mục tiêu nào?",
    "a": [
      "Chỉ tăng tốc độ mạng",
      "Chỉ điều khiển âm thanh",
      "Chỉ đổi màu giao diện",
      "Cấp phát, thu hồi, bảo vệ và tổ chức bộ nhớ cho các tiến trình"
    ],
    "correct": 3,
    "why": "Ý chính: Cấp phát, thu hồi, bảo vệ và tổ chức bộ nhớ cho các tiến trình.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q25",
    "q": "[C4_Q25] Khi đánh giá thuật toán định thời, nhận định nào đúng nhất?",
    "a": [
      "Round Robin không cần quantum",
      "SJF không cần biết burst time",
      "Không có thuật toán tối ưu cho mọi mục tiêu và mọi hệ thống",
      "FCFS luôn tốt nhất trong mọi trường hợp"
    ],
    "correct": 2,
    "why": "Ý chính: Không có thuật toán tối ưu cho mọi mục tiêu và mọi hệ thống.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q11",
    "q": "[C3_Q11] exec() thường dùng để làm gì?",
    "a": [
      "Tắt CPU",
      "Tạo giao diện đồ họa",
      "Thay thế chương trình đang chạy trong tiến trình bằng chương trình khác",
      "Tạo bản sao ổ cứng"
    ],
    "correct": 2,
    "why": "exec() thay thế ảnh chương trình trong tiến trình hiện tại, không tạo PID mới.; fork() tạo tiến trình con; wait() chờ con kết thúc.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q24",
    "q": "[C5_Q24] Trong Dining Philosophers, nguy cơ deadlock xảy ra khi nào?",
    "a": [
      "Không triết gia nào muốn ăn",
      "Tất cả đũa đều dư thừa vô hạn",
      "Mỗi triết gia giữ một chiếc đũa và chờ chiếc còn lại",
      "Chỉ có một triết gia trong hệ thống"
    ],
    "correct": 2,
    "why": "Dining Philosophers: mỗi người giữ một đũa và chờ đũa kia → circular wait.; Điều kiện deadlock: mutual exclusion, hold-and-wait, no preemption, circular wait.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q09",
    "q": "[C4_Q09] SJF không trưng dụng chọn tiến trình nào?",
    "a": [
      "Tiến trình đến sau cùng",
      "Tiến trình sẵn sàng có CPU burst ngắn nhất",
      "Tiến trình có PID lớn nhất",
      "Tiến trình dùng nhiều bộ nhớ nhất"
    ],
    "correct": 1,
    "why": "SJF không trưng dụng chọn tiến trình ready có CPU burst ngắn nhất.; SRTF là phiên bản có trưng dụng dựa vào thời gian còn lại.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q17",
    "q": "[C5_Q17] Binary semaphore thường có giá trị nào?",
    "a": [
      "Chỉ số âm",
      "0 hoặc 1",
      "Bất kỳ chuỗi ký tự nào",
      "Luôn bằng 100"
    ],
    "correct": 1,
    "why": "Binary semaphore có hai trạng thái logic 0 và 1.; Counting semaphore đếm nhiều tài nguyên; wait giảm, signal tăng theo ngữ nghĩa semaphore.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q14",
    "q": "[C1_Q14] Container khác máy ảo truyền thống ở điểm nào?",
    "a": [
      "Không liên quan đến hệ điều hành",
      "Không thể chạy ứng dụng",
      "Thường chia sẻ kernel của hệ điều hành chủ nên nhẹ hơn máy ảo đầy đủ",
      "Luôn cần một CPU vật lý riêng"
    ],
    "correct": 2,
    "why": "Container thường chia sẻ kernel máy chủ; VM có hệ điều hành khách riêng.; Container nhẹ/khởi động nhanh; VM cô lập ở mức máy ảo.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q10",
    "q": "[C5_Q10] Hạn chế thường gặp của các giải pháp phần mềm đồng bộ là gì?",
    "a": [
      "Luôn loại bỏ mọi lỗi lập trình",
      "Có thể gây chờ bận và khó mở rộng",
      "Không cần biến chia sẻ",
      "Không thể minh họa bằng thuật toán"
    ],
    "correct": 1,
    "why": "Busy waiting = lặp kiểm tra liên tục, gây tốn CPU.; Peterson áp dụng kinh điển cho 2 tiến trình; spinlock sử dụng chờ bận.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q07",
    "q": "[C3_Q07] Chuyển ngữ cảnh (context switch) là gì?",
    "a": [
      "Đổi màu giao diện hệ điều hành",
      "Sao chép tập tin sang USB",
      "Lưu trạng thái tiến trình hiện tại và nạp trạng thái tiến trình khác",
      "Tắt màn hình"
    ],
    "correct": 2,
    "why": "Context switch: lưu trạng thái tiến trình cũ, nạp trạng thái tiến trình mới.; PCB lưu thông tin cần thiết để tiếp tục thực thi.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q07",
    "q": "[C5_Q07] Yêu cầu chờ đợi hữu hạn (bounded waiting) nhằm tránh điều gì?",
    "a": [
      "Xóa dữ liệu dùng chung",
      "Tăng dung lượng RAM",
      "Tăng tốc CPU",
      "Starvation"
    ],
    "correct": 3,
    "why": "Bounded waiting: giới hạn số lần tiến trình khác vượt lên trước.; Giúp ngăn starvation; khác progress và mutual exclusion.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q13",
    "q": "[C3_Q13] Tiến trình zombie là tiến trình như thế nào?",
    "a": [
      "Đang chạy trên CPU mạnh nhất",
      "Đã kết thúc nhưng thông tin trạng thái chưa được tiến trình cha thu nhận",
      "Đang chờ bàn phím",
      "Chưa từng được tạo"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q12",
    "q": "[C2_Q12] Nhược điểm có thể gặp của microkernel là gì?",
    "a": [
      "Chi phí truyền thông giữa các thành phần có thể cao hơn",
      "Không hỗ trợ bộ nhớ",
      "Không thể chạy ứng dụng",
      "Không thể bảo vệ hệ thống"
    ],
    "correct": 0,
    "why": "Ý chính: Chi phí truyền thông giữa các thành phần có thể cao hơn.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q05",
    "q": "[C2_Q05] System call thuộc nhóm quản lý tiến trình thường dùng để làm gì?",
    "a": [
      "Tạo, kết thúc, chờ hoặc điều khiển tiến trình",
      "Thay đổi màu bàn phím",
      "Xóa lịch sử trình duyệt",
      "Tạo hình nền động"
    ],
    "correct": 0,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q10",
    "q": "[C4_Q10] SRTF là phiên bản nào của SJF?",
    "a": [
      "Chỉ dùng cho hệ thống tập tin",
      "Chỉ chọn tiến trình ưu tiên thấp",
      "Có trưng dụng, chọn tiến trình có thời gian còn lại ngắn nhất",
      "Không trưng dụng, chọn tiến trình dài nhất"
    ],
    "correct": 2,
    "why": "SRTF = Shortest Remaining Time First, phiên bản SJF có trưng dụng.; Tiến trình mới có thời gian còn lại ngắn hơn có thể giành CPU.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q12",
    "q": "[C3_Q12] wait() thường được tiến trình cha dùng để làm gì?",
    "a": [
      "Tăng tốc độ mạng",
      "Đổi mật khẩu hệ thống",
      "Chờ tiến trình con kết thúc và thu nhận trạng thái kết thúc",
      "Tạo tập tin tạm"
    ],
    "correct": 2,
    "why": "Ý chính: Chờ tiến trình con kết thúc và thu nhận trạng thái kết thúc.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q05",
    "q": "[C1_Q05] System call dùng để làm gì?",
    "a": [
      "Tự động sửa lỗi thuật toán",
      "Tăng tốc độ gõ bàn phím",
      "Thay thế hoàn toàn trình biên dịch",
      "Cho phép chương trình người dùng yêu cầu dịch vụ từ hệ điều hành"
    ],
    "correct": 3,
    "why": "Ý chính: Cho phép chương trình người dùng yêu cầu dịch vụ từ hệ điều hành.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q12",
    "q": "[C5_Q12] Disable interrupt bảo vệ miền tương tranh bằng cách nào?",
    "a": [
      "Tạo thêm nhiều tiến trình",
      "Tăng dung lượng ổ đĩa",
      "Xóa tài nguyên dùng chung",
      "Tạm thời vô hiệu hóa ngắt để tránh bị gián đoạn trong đoạn mã cần bảo vệ"
    ],
    "correct": 3,
    "why": "Disable interrupts tránh bị ngắt trên CPU đang chạy trong đoạn mã bảo vệ.; Không đủ bảo vệ giữa nhiều CPU và không nên tắt ngắt quá lâu.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q13",
    "q": "[C1_Q13] Máy ảo (virtual machine) giúp ích gì?",
    "a": [
      "Xóa bỏ cơ chế bảo vệ hệ thống",
      "Thay thế mọi ứng dụng văn phòng",
      "Làm mất hoàn toàn nhu cầu dùng CPU",
      "Cho phép chạy nhiều môi trường hệ điều hành độc lập trên cùng phần cứng"
    ],
    "correct": 3,
    "why": "Ý chính: Cho phép chạy nhiều môi trường hệ điều hành độc lập trên cùng phần cứng.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q13",
    "q": "[C4_Q13] Trong Round Robin, quantum là gì?",
    "a": [
      "Số lượng tập tin trong thư mục",
      "Khoảng thời gian tối đa một tiến trình được giữ CPU mỗi lượt",
      "Dung lượng ổ cứng",
      "Kích thước màn hình"
    ],
    "correct": 1,
    "why": "Time quantum: thời lượng CPU tối đa mỗi lượt trong Round Robin.; Quantum nhỏ: nhiều context switch; quá lớn: RR gần FCFS.",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q16",
    "q": "[C3_Q16] Các luồng trong cùng một tiến trình thường chia sẻ gì?",
    "a": [
      "Mỗi luồng luôn có kernel riêng",
      "Không gian địa chỉ và tài nguyên của tiến trình",
      "Mỗi luồng luôn có một ổ cứng riêng",
      "Không chia sẻ bất kỳ tài nguyên nào"
    ],
    "correct": 1,
    "why": "Các luồng cùng process chia sẻ code, data, heap và tệp đang mở.; Mỗi luồng có stack, thanh ghi và program counter riêng.",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q22",
    "q": "[C5_Q22] Bài toán Producer-Consumer cần đồng bộ những gì?",
    "a": [
      "Chỉ xóa consumer",
      "Chỉ tăng kích thước màn hình",
      "Chỉ đổi tên producer",
      "Loại trừ khi truy cập vùng đệm và đếm số ô trống/ô đầy"
    ],
    "correct": 3,
    "why": "Producer-Consumer: mutex bảo vệ buffer, empty đếm ô trống, full đếm ô đầy.; Producer chờ khi buffer đầy; consumer chờ khi buffer rỗng.",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q03",
    "q": "[C4_Q03] Dispatch là gì trong định thời CPU?",
    "a": [
      "Xóa một tiến trình khỏi ổ đĩa",
      "Tăng dung lượng RAM",
      "Đổi tên thư mục",
      "Chuyển CPU cho tiến trình được chọn thực thi"
    ],
    "correct": 3,
    "why": "Ý chính: Chuyển CPU cho tiến trình được chọn thực thi.; Waiting time: thời gian chờ ready; turnaround = hoàn thành − đến; response = chạy lần đầu − đến.",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q04",
    "q": "[C2_Q04] Giao diện đồ họa (GUI) giúp người dùng làm gì?",
    "a": [
      "Thay thế hoàn toàn CPU",
      "Tương tác với hệ thống thông qua cửa sổ, biểu tượng, menu và con trỏ",
      "Tự động tăng RAM vật lý",
      "Xóa bỏ mọi tập tin hệ thống"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q15",
    "q": "[C4_Q15] Priority Scheduling chọn tiến trình dựa trên gì?",
    "a": [
      "Tên tiến trình theo thứ tự chữ cái",
      "Mức ưu tiên của tiến trình",
      "Số lượng tập tin trong máy",
      "Kích thước biểu tượng"
    ],
    "correct": 1,
    "why": "Ý chính: Mức ưu tiên của tiến trình.; Waiting time: thời gian chờ ready; turnaround = hoàn thành − đến; response = chạy lần đầu − đến.",
    "ref": "Trang 14",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q06",
    "q": "[C4_Q06] Thời gian đáp ứng (response time) là gì?",
    "a": [
      "Thời gian sao chép tập tin",
      "Thời gian từ khi máy tính bật đến khi tắt",
      "Thời gian từ khi tiến trình đến khi được CPU phục vụ lần đầu",
      "Thời gian cài đặt hệ điều hành"
    ],
    "correct": 2,
    "why": "Response time = thời điểm được CPU lần đầu − thời điểm đến.; Turnaround = hoàn thành − đến; waiting = tổng thời gian chờ ready.",
    "ref": "Trang 14",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q15",
    "q": "[C2_Q15] Khi thiết kế hệ điều hành, yếu tố nào cần cân bằng?",
    "a": [
      "Chỉ màu sắc giao diện",
      "Chỉ số lượng biểu tượng",
      "Hiệu năng, an toàn, dễ mở rộng và dễ bảo trì",
      "Chỉ tên thư mục"
    ],
    "correct": 2,
    "why": "Ý chính: Hiệu năng, an toàn, dễ mở rộng và dễ bảo trì.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Trang 14",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q20",
    "q": "[C4_Q20] Processor affinity có nghĩa là gì?",
    "a": [
      "Chuyển tiến trình sang ổ cứng",
      "Xu hướng giữ tiến trình/luồng chạy trên cùng một lõi CPU",
      "Xóa tiến trình khỏi bộ nhớ",
      "Tắt một lõi CPU vĩnh viễn"
    ],
    "correct": 1,
    "why": "Processor affinity: xu hướng chạy tiến trình/luồng trên cùng CPU/lõi.; Lợi ích: cache locality, giảm chi phí di chuyển giữa các lõi.",
    "ref": "Trang 14",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q08",
    "q": "[C4_Q08] Nhược điểm nổi bật của FCFS là gì?",
    "a": [
      "Có thể gây hiệu ứng đoàn tàu (convoy effect)",
      "Luôn cần biết burst time tương lai",
      "Luôn gây deadlock",
      "Không thể chạy tiến trình nào"
    ],
    "correct": 0,
    "why": "FCFS có convoy effect: tiến trình ngắn chờ sau tiến trình dài.; FCFS không trưng dụng, đơn giản nhưng thời gian chờ có thể cao.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q04",
    "q": "[C1_Q04] Thành phần nào là phần lõi của hệ điều hành, thường chạy ở chế độ nhân?",
    "a": [
      "Kernel",
      "Trình soạn thảo văn bản",
      "Trình duyệt",
      "Ứng dụng người dùng"
    ],
    "correct": 0,
    "why": "Ý chính: Kernel.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q07",
    "q": "[C2_Q07] API khác system call trực tiếp ở điểm nào?",
    "a": [
      "API cung cấp giao diện lập trình thuận tiện hơn, thường gọi system call bên dưới",
      "API chỉ là bộ nhớ vật lý",
      "API không liên quan đến phần mềm",
      "API luôn là phần cứng"
    ],
    "correct": 0,
    "why": "API cung cấp hàm tiện dụng; không phải mọi lời gọi API đều sinh system call.; System call chuyển vào kernel để yêu cầu dịch vụ được bảo vệ.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q21",
    "q": "[C5_Q21] Starvation khác deadlock ở điểm nào?",
    "a": [
      "Starvation không liên quan đến công bằng",
      "Starvation luôn làm toàn hệ thống dừng ngay",
      "Starvation chỉ xảy ra khi không có tiến trình",
      "Starvation là một tiến trình có thể bị chờ rất lâu vì luôn bị bỏ qua, không nhất thiết tất cả đều kẹt"
    ],
    "correct": 3,
    "why": "Starvation: tiến trình bị bỏ qua quá lâu; deadlock: các tiến trình chờ nhau không tiến triển.; Aging là một biện pháp giảm starvation.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q02",
    "q": "[C3_Q02] Điểm khác nhau cơ bản giữa chương trình và tiến trình là gì?",
    "a": [
      "Không có khác biệt nào",
      "Chương trình là mã tĩnh, tiến trình là chương trình đang thực thi",
      "Chương trình luôn chạy, tiến trình luôn tắt",
      "Chương trình là phần cứng, tiến trình là dây cáp"
    ],
    "correct": 1,
    "why": "Ý chính: Chương trình là mã tĩnh, tiến trình là chương trình đang thực thi.; Ready chờ CPU; Running đang chạy; Blocked chờ sự kiện/I/O.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q01",
    "q": "[C4_Q01] Định thời CPU là gì?",
    "a": [
      "Chọn màu sắc giao diện hệ thống",
      "Chọn tên tập tin để lưu",
      "Chọn tiến trình trong hàng đợi sẵn sàng để cấp CPU thực thi",
      "Chọn thiết bị âm thanh mặc định"
    ],
    "correct": 2,
    "why": "Ý chính: Chọn tiến trình trong hàng đợi sẵn sàng để cấp CPU thực thi.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q10",
    "q": "[C3_Q10] Sau fork(), tiến trình cha và tiến trình con có đặc điểm nào?",
    "a": [
      "Chỉ tiến trình con được tiếp tục",
      "Cùng tiếp tục thực thi từ sau lời gọi fork(), nhưng có PID khác nhau",
      "Chỉ tiến trình cha được tiếp tục",
      "Cả hai đều bị xóa ngay"
    ],
    "correct": 1,
    "why": "Ý chính: Cùng tiếp tục thực thi từ sau lời gọi fork(), nhưng có PID khác nhau.; Process = chương trình đang thực thi; PCB lưu PID, trạng thái, thanh ghi, bộ đếm lệnh.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q22",
    "q": "[C4_Q22] Load balancing trên hệ đa lõi nhằm mục tiêu gì?",
    "a": [
      "Chỉ chạy một tiến trình trên toàn hệ thống",
      "Phân bố tải công việc tương đối đều giữa các lõi CPU",
      "Tắt tất cả lõi phụ",
      "Xóa hàng đợi sẵn sàng"
    ],
    "correct": 1,
    "why": "Ý chính: Phân bố tải công việc tương đối đều giữa các lõi CPU.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q12",
    "q": "[C1_Q12] Hệ điều hành thời gian thực cần chú trọng nhất yêu cầu nào?",
    "a": [
      "Chạy càng nhiều trình duyệt càng tốt",
      "Đáp ứng đúng thời hạn",
      "Có nhiều hình nền",
      "Tạo nhiều biểu tượng màn hình"
    ],
    "correct": 1,
    "why": "Ý chính: Đáp ứng đúng thời hạn.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q02",
    "q": "[C2_Q02] Dịch vụ nào sau đây thường do hệ điều hành cung cấp?",
    "a": [
      "Chỉ thiết kế trang web",
      "Chỉ in màu tài liệu",
      "Chỉ chỉnh sửa ảnh",
      "Thực thi chương trình, thao tác tập tin, vào/ra và truyền thông"
    ],
    "correct": 3,
    "why": "Ý chính: Thực thi chương trình, thao tác tập tin, vào/ra và truyền thông.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q08",
    "q": "[C2_Q08] Vì sao chương trình ứng dụng thường không gọi trực tiếp lệnh phần cứng?",
    "a": [
      "Vì cần hệ điều hành kiểm soát an toàn và chia sẻ tài nguyên",
      "Vì mọi ứng dụng đều chạy ở chế độ nhân",
      "Vì không tồn tại system call",
      "Vì phần cứng không cần bảo vệ"
    ],
    "correct": 0,
    "why": "Ý chính: Vì cần hệ điều hành kiểm soát an toàn và chia sẻ tài nguyên.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q19",
    "q": "[C4_Q19] Ý tưởng chính của MLFQ là gì?",
    "a": [
      "Điều chỉnh mức ưu tiên dựa trên hành vi CPU/I/O của tiến trình",
      "Không cần quantum",
      "Chỉ chạy tiến trình có PID nhỏ nhất",
      "Không dùng hàng đợi"
    ],
    "correct": 0,
    "why": "MLFQ điều chỉnh ưu tiên theo hành vi: dùng hết quantum thường hạ mức.; Tiến trình I/O-bound thường được ưu tiên đáp ứng nhanh; có thể tăng ưu tiên chống starvation.",
    "ref": "Trang 17",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q14",
    "q": "[C3_Q14] Tiến trình orphan là tiến trình như thế nào?",
    "a": [
      "Tiến trình không có PID",
      "Tiến trình đang chạy trong chế độ nhân duy nhất",
      "Tiến trình con còn chạy nhưng tiến trình cha đã kết thúc",
      "Tiến trình không có mã chương trình"
    ],
    "correct": 2,
    "why": "Orphan: tiến trình cha kết thúc khi con còn sống; hệ thống nhận nuôi con.; Zombie: con đã kết thúc nhưng cha chưa thu nhận trạng thái.",
    "ref": "Trang 17",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q03",
    "q": "[C3_Q03] PCB (Process Control Block) dùng để làm gì?",
    "a": [
      "Lưu hình nền hệ thống",
      "Lưu thông tin quản lý tiến trình như trạng thái, thanh ghi, bộ đếm chương trình",
      "Lưu tốc độ quạt máy tính",
      "Lưu danh sách phím tắt trình duyệt"
    ],
    "correct": 1,
    "why": "Ý chính: Lưu thông tin quản lý tiến trình như trạng thái, thanh ghi, bộ đếm chương trình.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 17",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C2_Q09",
    "q": "[C2_Q09] Cấu trúc nguyên khối (monolithic kernel) có đặc điểm nào?",
    "a": [
      "Nhiều dịch vụ hệ điều hành chạy trong kernel, hiệu năng cao nhưng kernel lớn",
      "Chỉ hỗ trợ một tập tin duy nhất",
      "Tất cả dịch vụ chạy trong trình duyệt",
      "Không có kernel"
    ],
    "correct": 0,
    "why": "Monolithic kernel: nhiều dịch vụ chạy ở kernel mode, thường giảm chi phí gọi qua lại.; Microkernel: kernel nhỏ, nhiều dịch vụ ở user mode, tăng cô lập lỗi.",
    "ref": "Trang 17",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q18",
    "q": "[C3_Q18] Vì sao đa luồng có thể gây khó khăn?",
    "a": [
      "Vì không thể dùng CPU đa lõi",
      "Vì không thể chia sẻ bộ nhớ",
      "Cần đồng bộ khi nhiều luồng truy cập dữ liệu dùng chung",
      "Vì mọi luồng luôn chạy tuần tự tuyệt đối"
    ],
    "correct": 2,
    "why": "Ý chính: Cần đồng bộ khi nhiều luồng truy cập dữ liệu dùng chung.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q05",
    "q": "[C3_Q05] Trạng thái Running của tiến trình có nghĩa là gì?",
    "a": [
      "Tiến trình đang nằm trong ổ đĩa ngoài",
      "Tiến trình đang được CPU thực thi",
      "Tiến trình chưa được nạp vào bộ nhớ",
      "Tiến trình đã bị xóa"
    ],
    "correct": 1,
    "why": "Ý chính: Tiến trình đang được CPU thực thi.; Ready chờ CPU; Running đang chạy; Blocked chờ sự kiện/I/O.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q01",
    "q": "[C5_Q01] Đồng bộ hóa tiến trình cần thiết khi nào?",
    "a": [
      "Khi không có CPU",
      "Khi nhiều tiến trình/luồng cùng truy cập tài nguyên hoặc dữ liệu dùng chung",
      "Khi hệ thống không có bộ nhớ",
      "Khi chỉ có một tiến trình duy nhất và không có dữ liệu chia sẻ"
    ],
    "correct": 1,
    "why": "Ý chính: Khi nhiều tiến trình/luồng cùng truy cập tài nguyên hoặc dữ liệu dùng chung.; Critical section: đoạn mã truy cập dữ liệu chung; race condition do thứ tự thực thi xen kẽ.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q11",
    "q": "[C5_Q11] Chờ bận (busy waiting) là gì?",
    "a": [
      "Tiến trình ngủ và không chiếm CPU",
      "Tiến trình liên tục kiểm tra điều kiện trong khi chờ",
      "Tiến trình không tồn tại trong bộ nhớ",
      "Tiến trình đã kết thúc"
    ],
    "correct": 1,
    "why": "Ý chính: Tiến trình liên tục kiểm tra điều kiện trong khi chờ.; Ba yêu cầu: mutual exclusion, progress, bounded waiting.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C4_Q18",
    "q": "[C4_Q18] MLFQ là gì?",
    "a": [
      "Một lệnh tắt tiến trình",
      "Một giao diện đồ họa",
      "Định thời dùng nhiều hàng đợi phản hồi với mức ưu tiên khác nhau",
      "Một loại bộ nhớ ngoài"
    ],
    "correct": 2,
    "why": "MLFQ = Multilevel Feedback Queue: nhiều hàng đợi ưu tiên, cho phép thay đổi mức.; Ưu tiên được điều chỉnh theo hành vi sử dụng CPU/I/O.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q02",
    "q": "[C5_Q02] Race condition là gì?",
    "a": [
      "Một phương pháp nén tập tin",
      "Một thuật toán định thời theo ưu tiên",
      "Một loại bộ nhớ ảo",
      "Kết quả phụ thuộc vào thứ tự thực thi xen kẽ của các tiến trình/luồng"
    ],
    "correct": 3,
    "why": "Ý chính: Kết quả phụ thuộc vào thứ tự thực thi xen kẽ của các tiến trình/luồng.; Ba yêu cầu: mutual exclusion, progress, bounded waiting.",
    "ref": "Trang 19",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C1_Q03",
    "q": "[C1_Q03] Mục tiêu quan trọng của hệ điều hành là gì?",
    "a": [
      "Sử dụng tài nguyên hiệu quả và tạo môi trường thuận tiện cho người dùng",
      "Chỉ tăng dung lượng ổ đĩa",
      "Thay thế tất cả phần mềm ứng dụng",
      "Loại bỏ hoàn toàn nhu cầu dùng phần cứng"
    ],
    "correct": 0,
    "why": "Ý chính: Sử dụng tài nguyên hiệu quả và tạo môi trường thuận tiện cho người dùng.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 19",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q04",
    "q": "[C5_Q04] Miền tương trục (critical section) là gì?",
    "a": [
      "Một loại thiết bị vào/ra",
      "Đoạn mã truy cập hoặc cập nhật dữ liệu/tài nguyên dùng chung",
      "Một thư mục hệ thống",
      "Phần giao diện đăng nhập"
    ],
    "correct": 1,
    "why": "Ý chính: Đoạn mã truy cập hoặc cập nhật dữ liệu/tài nguyên dùng chung.; Critical section: đoạn mã truy cập dữ liệu chung; race condition do thứ tự thực thi xen kẽ.",
    "ref": "Trang 19",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q20",
    "q": "[C5_Q20] Deadlock là gì?",
    "a": [
      "Bộ nhớ tự động mở rộng",
      "Tiến trình chờ lâu nhưng cuối cùng luôn được phục vụ ngay",
      "CPU chạy nhanh hơn bình thường",
      "Hai hay nhiều tiến trình chờ nhau vô hạn nên không tiến trình nào tiếp tục được"
    ],
    "correct": 3,
    "why": "Deadlock: nhóm tiến trình chờ nhau vô hạn, không thể tiếp tục.; Bốn điều kiện cần: mutual exclusion, hold-and-wait, no preemption, circular wait.",
    "ref": "Trang 19",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q14",
    "q": "[C5_Q14] Compare-and-Swap hoạt động theo ý tưởng nào?",
    "a": [
      "Tắt mọi ngắt vĩnh viễn",
      "So sánh giá trị hiện tại với giá trị kỳ vọng, nếu khớp thì cập nhật giá trị mới",
      "So sánh hai hình nền",
      "Chuyển tiến trình sang trạng thái zombie"
    ],
    "correct": 1,
    "why": "Compare-and-Swap (CAS): nếu giá trị hiện tại bằng kỳ vọng thì thay bằng giá trị mới.; CAS là thao tác nguyên tử, dùng trong đồng bộ không khóa hoặc xây dựng khóa.",
    "ref": "Trang 20",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q20",
    "q": "[C3_Q20] Shared memory trong IPC có ưu điểm nào?",
    "a": [
      "Chỉ dùng được cho một tiến trình",
      "Không cần hệ điều hành cấp phát",
      "Không cần đồng bộ hóa trong mọi trường hợp",
      "Trao đổi dữ liệu nhanh vì các tiến trình cùng truy cập vùng nhớ chung"
    ],
    "correct": 3,
    "why": "Shared memory: nhiều tiến trình cùng truy cập vùng nhớ, trao đổi nhanh.; Cần đồng bộ khi ghi/đọc đồng thời để tránh race condition.",
    "ref": "Trang 20",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q15",
    "q": "[C5_Q15] Semaphore là gì?",
    "a": [
      "Một loại màn hình cảm ứng",
      "Một trình duyệt web",
      "Một định dạng tập tin ảnh",
      "Công cụ đồng bộ hóa dựa trên một biến nguyên và các thao tác nguyên tử"
    ],
    "correct": 3,
    "why": "Semaphore là biến đếm được thao tác nguyên tử bằng wait() và signal().; Binary semaphore: 0/1; counting semaphore: quản lý nhiều đơn vị tài nguyên.",
    "ref": "Trang 20",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q01",
    "q": "[C3_Q01] Tiến trình là gì?",
    "a": [
      "Một tập tin ảnh trên đĩa",
      "Một chương trình đang được thực thi",
      "Một thiết bị phần cứng",
      "Một phím tắt trên màn hình"
    ],
    "correct": 1,
    "why": "Ý chính: Một chương trình đang được thực thi.; Process = chương trình đang thực thi; PCB lưu PID, trạng thái, thanh ghi, bộ đếm lệnh.",
    "ref": "Trang 20",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C5_Q25",
    "q": "[C5_Q25] Monitor khác semaphore ở điểm nổi bật nào?",
    "a": [
      "Monitor luôn là thiết bị phần cứng",
      "Monitor không hỗ trợ loại trừ hỗ tương",
      "Monitor đóng gói dữ liệu và thao tác, cung cấp mức trừu tượng cao hơn",
      "Monitor chỉ dùng để hiển thị hình ảnh"
    ],
    "correct": 2,
    "why": "Monitor đóng gói dữ liệu chia sẻ, thủ tục và cơ chế đồng bộ.; Condition variable thường dùng wait()/signal() trong monitor.",
    "ref": "Trang 21",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "elearning",
    "sourceName": "100 câu ôn thi elearning.pdf",
    "code": "C3_Q04",
    "q": "[C3_Q04] Trạng thái Ready của tiến trình có nghĩa là gì?",
    "a": [
      "Tiến trình đã kết thúc hoàn toàn",
      "Tiến trình đã sẵn sàng chạy và đang chờ CPU",
      "Tiến trình đang chờ I/O",
      "Tiến trình chưa được tạo"
    ],
    "correct": 1,
    "why": "Ý chính: Tiến trình đã sẵn sàng chạy và đang chờ CPU.; Process = chương trình đang thực thi; PCB lưu PID, trạng thái, thanh ghi, bộ đếm lệnh.",
    "ref": "Trang 21",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q01",
    "q": "[C1_Q01] Vai trò chính của hệ điều hành là gì? (Đề gốc: Câu 23)",
    "a": [
      "Chỉ dùng để biên dịch chương trình",
      "Quản lý tài nguyên phần cứng và cung cấp môi trường thực thi cho chương trình",
      "Chỉ dùng để thiết kế giao diện đồ họa",
      "Chỉ dùng để soạn thảo văn bản"
    ],
    "correct": 1,
    "why": "Ý chính: Quản lý tài nguyên phần cứng và cung cấp môi trường thực thi cho chương trình.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Trang 1",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q02",
    "q": "[C1_Q02] Hệ điều hành đóng vai trò trung gian giữa các đối tượng nào? (Đề gốc: Câu 17)",
    "a": [
      "Bộ nhớ ngoài và bàn phím",
      "Người dùng/chương trình ứng dụng và phần cứng máy tính",
      "Trình duyệt web và máy in",
      "Tập tin và thư mục"
    ],
    "correct": 1,
    "why": "Ý chính: Người dùng/chương trình ứ.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Trang 2",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q03",
    "q": "[C1_Q03] Mục tiêu quan trọng của hệ điều hành là gì? (Đề gốc: Câu 92)",
    "a": [
      "Sử dụng tài nguyên hiệu quả và tạo môi trường thuận tiện cho người dùng",
      "Chỉ tăng dung lượng ổ đĩa",
      "Thay thế tất cả phần mềm ứng dụng",
      "Loại bỏ hoàn toàn nhu cầu dùng phần cứng"
    ],
    "correct": 0,
    "why": "Ý chính: Sử dụng tài nguyên hiệu quả và tạo môi trường thuận tiện cho người dùng.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 2",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q04",
    "q": "[C1_Q04] Thành phần nào là phần lõi của hệ điều hành, thường chạy ở chế độ nhân? (Đề gốc: Câu 72)",
    "a": [
      "Kernel",
      "Trình soạn thảo văn bản",
      "Trình duyệt",
      "Ứng dụng người dùng"
    ],
    "correct": 0,
    "why": "Ý chính: Kernel.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Trang 2",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q05",
    "q": "[C1_Q05] System call dùng để làm gì? (Đề gốc: Câu 59)",
    "a": [
      "Tự động sửa lỗi thuật toán",
      "Tăng tốc độ gõ bàn phím",
      "Thay thế hoàn toàn trình biên dịch",
      "Cho phép chương trình người dùng yêu cầu dịch vụ từ hệ điều hành"
    ],
    "correct": 3,
    "why": "Ý chính: Cho phép chương trình người dùng yêu cầu dịch vụ từ hệ điều hành.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Trang 2",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q06",
    "q": "[C1_Q06] Vì sao cần phân biệt chế độ người dùng và chế độ nhân? (Đề gốc: Câu 43)",
    "a": [
      "Để bảo vệ hệ thống, ngăn chương trình người dùng truy cập trực tiếp tài nguyên nhạy cảm",
      "Để tăng kích thước màn hình",
      "Để làm cho mọi chương trình chạy chậm hơn",
      "Để xóa bỏ hoàn toàn quyền truy cập bộ nhớ"
    ],
    "correct": 0,
    "why": "Ý chính: Để bảo vệ hệ thống, ngăn chương trình người dùng truy cập trực tiếp tài nguyên nhạy cảm.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 2",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q07",
    "q": "[C1_Q07] Chế độ nhân (kernel mode) có đặc điểm nào? (Đề gốc: Câu 33)",
    "a": [
      "Chỉ dùng để hiển thị hình nền",
      "Có quyền thực thi các lệnh đặc quyền và truy cập tài nguyên hệ thống",
      "Không được truy cập bộ nhớ",
      "Chỉ cho phép chạy trò chơi"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q08",
    "q": "[C1_Q08] Hệ điều hành đa nhiệm có ý nghĩa gì? (Đề gốc: Câu 22)",
    "a": [
      "Chỉ cho phép một chương trình chạy duy nhất",
      "Cho phép nhiều tiến trình/chương trình cùng được quản lý và chia sẻ CPU",
      "Không cần thiết bị vào/ra",
      "Không cần bộ nhớ chính"
    ],
    "correct": 1,
    "why": "Ý chính: Cho phép nhiều tiến trình/chương trình cùng được quản lý và chia sẻ CPU.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q09",
    "q": "[C1_Q09] Trong hệ điều hành, quản lý bộ nhớ nhằm mục tiêu nào? (Đề gốc: Câu 44)",
    "a": [
      "Chỉ tăng tốc độ mạng",
      "Chỉ điều khiển âm thanh",
      "Chỉ đổi màu giao diện",
      "Cấp phát, thu hồi, bảo vệ và tổ chức bộ nhớ cho các tiến trình"
    ],
    "correct": 3,
    "why": "Ý chính: Cấp phát, thu hồi, bảo vệ và tổ chức bộ nhớ cho các tiến trình.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q10",
    "q": "[C1_Q10] Quản lý tập tin của hệ điều hành bao gồm công việc nào? (Đề gốc: Câu 9)",
    "a": [
      "Chỉ thay đổi độ sáng màn hình",
      "Chỉ quản lý chuột",
      "Chỉ tính toán lịch CPU",
      "Tạo, xóa, đọc, ghi và tổ chức tập tin/thư mục"
    ],
    "correct": 3,
    "why": "Ý chính: Tạo, xóa, đọc, ghi và tổ chức tập tin/thư mục.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q11",
    "q": "[C1_Q11] Hệ điều hành kiểu batch phù hợp nhất với tình huống nào? (Đề gốc: Câu 38)",
    "a": [
      "Họp trực tuyến",
      "Xử lý các công việc theo lô, ít tương tác trực tiếp với người dùng",
      "Vẽ đồ họa bằng bút cảm ứng",
      "Chơi game tương tác thời gian thực"
    ],
    "correct": 1,
    "why": "Ý chính: Xử lý các công việc theo lô, ít tương tác trực tiếp với người dùng.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Trang 3",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q12",
    "q": "[C1_Q12] Hệ điều hành thời gian thực cần chú trọng nhất yêu cầu nào? (Đề gốc: Câu 79) (Đề gốc: Câu 61)",
    "a": [
      "Chạy càng nhiều trình duyệt càng tốt",
      "Đáp ứng đúng thời hạn",
      "Có nhiều hình nền",
      "Tạo nhiều biểu tượng màn hình"
    ],
    "correct": 1,
    "why": "Ý chính: Đáp ứng đúng thời hạn.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q13",
    "q": "[C1_Q13] Máy ảo (virtual machine) giúp ích gì? (Đề gốc: Câu 61)",
    "a": [
      "Xóa bỏ cơ chế bảo vệ hệ thống",
      "Thay thế mọi ứng dụng văn phòng",
      "Làm mất hoàn toàn nhu cầu dùng CPU",
      "Cho phép chạy nhiều môi trường hệ điều hành độc lập trên cùng phần cứng"
    ],
    "correct": 3,
    "why": "Ý chính: Cho phép chạy nhiều môi trường hệ điều hành độc lập trên cùng phần cứng.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q14",
    "q": "[C1_Q14] Container khác máy ảo truyền thống ở điểm nào? (Đề gốc: Câu 50)",
    "a": [
      "Không liên quan đến hệ điều hành",
      "Không thể chạy ứng dụng",
      "Thường chia sẻ kernel của hệ điều hành chủ nên nhẹ hơn máy ảo đầy đủ",
      "Luôn cần một CPU vật lý riêng"
    ],
    "correct": 2,
    "why": "Container thường chia sẻ kernel máy chủ; VM có hệ điều hành khách riêng.; Container nhẹ/khởi động nhanh; VM cô lập ở mức máy ảo.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C1_Q15",
    "q": "[C1_Q15] Khi một chương trình cần đọc tập tin, nó thường phải thông qua cơ chế nào của hệ điều hành? (Đề gốc: Câu 15)",
    "a": [
      "Thay đổi độ phân giải",
      "Đổi hình nền",
      "System call",
      "Tắt màn hình"
    ],
    "correct": 2,
    "why": "Ý chính: System call.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Trang 4",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q01",
    "q": "[C2_Q01] Dịch vụ hệ điều hành là gì? (Đề gốc: Câu 35)",
    "a": [
      "Các tệp hình ảnh nền",
      "Các phím tắt của trình duyệt",
      "Các chức năng hệ điều hành cung cấp cho chương trình và người dùng",
      "Các dây cáp kết nối phần cứng"
    ],
    "correct": 2,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 5",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q02",
    "q": "[C2_Q02] Dịch vụ nào sau đây thường do hệ điều hành cung cấp? (Đề gốc: Câu 80)",
    "a": [
      "Chỉ thiết kế trang web",
      "Chỉ in màu tài liệu",
      "Chỉ chỉnh sửa ảnh",
      "Thực thi chương trình, thao tác tập tin, vào/ra và truyền thông"
    ],
    "correct": 3,
    "why": "Ý chính: Thực thi chương trình, thao tác tập tin, vào/ra và truyền thông.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Trang 5",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q03",
    "q": "[C2_Q03] Giao diện dòng lệnh (CLI) có đặc điểm nào? (Đề gốc: Câu 10)",
    "a": [
      "Người dùng nhập lệnh dạng văn bản để yêu cầu hệ thống thực hiện công việc",
      "Không cho phép chạy chương trình",
      "Chỉ thao tác bằng cảm biến vân tay",
      "Luôn cần màn hình cảm ứng"
    ],
    "correct": 0,
    "why": "Ý chính: Người dùng nhập lệnh dạng văn bản để yêu cầu hệ thống thực hiện công việc.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Trang 5",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q04",
    "q": "[C2_Q04] Giao diện đồ họa (GUI) giúp người dùng làm gì? (Đề gốc: Câu 66)",
    "a": [
      "Thay thế hoàn toàn CPU",
      "Tương tác với hệ thống thông qua cửa sổ, biểu tượng, menu và con trỏ",
      "Tự động tăng RAM vật lý",
      "Xóa bỏ mọi tập tin hệ thống"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 5",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q05",
    "q": "[C2_Q05] System call thuộc nhóm quản lý tiến trình thường dùng để làm gì? (Đề gốc: Câu 56) (Đề gốc: Câu 24)",
    "a": [
      "Tạo, kết thúc, chờ hoặc điều khiển tiến trình",
      "Thay đổi màu bàn phím",
      "Xóa lịch sử trình duyệt",
      "Tạo hình nền động"
    ],
    "correct": 0,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 5",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q06",
    "q": "[C2_Q06] System call thuộc nhóm quản lý tập tin thường liên quan đến thao tác nào? (Đề gốc: Câu 24)",
    "a": [
      "Mở, đọc, ghi, đóng và xóa tập tin",
      "Tăng tốc quạt tản nhiệt",
      "Thay đổi font chữ hệ thống",
      "Điều chỉnh độ sáng màn hình"
    ],
    "correct": 0,
    "why": "Ý chính: Mở, đọc, ghi, đóng và xóa tập tin.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q07",
    "q": "[C2_Q07] API khác system call trực tiếp ở điểm nào? (Đề gốc: Câu 73)",
    "a": [
      "API cung cấp giao diện lập trình thuận tiện hơn, thường gọi system call bên dưới",
      "API chỉ là bộ nhớ vật lý",
      "API không liên quan đến phần mềm",
      "API luôn là phần cứng"
    ],
    "correct": 0,
    "why": "API cung cấp hàm tiện dụng; không phải mọi lời gọi API đều sinh system call.; System call chuyển vào kernel để yêu cầu dịch vụ được bảo vệ.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q08",
    "q": "[C2_Q08] Vì sao chương trình ứng dụng thường không gọi trực tiếp lệnh phần cứng? (Đề gốc: Câu 81)",
    "a": [
      "Vì cần hệ điều hành kiểm soát an toàn và chia sẻ tài nguyên",
      "Vì mọi ứng dụng đều chạy ở chế độ nhân",
      "Vì không tồn tại system call",
      "Vì phần cứng không cần bảo vệ"
    ],
    "correct": 0,
    "why": "Ý chính: Vì cần hệ điều hành kiểm soát an toàn và chia sẻ tài nguyên.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q09",
    "q": "[C2_Q09] Cấu trúc nguyên khối (monolithic kernel) có đặc điểm nào? (Đề gốc: Câu 85)",
    "a": [
      "Nhiều dịch vụ hệ điều hành chạy trong kernel, hiệu năng cao nhưng kernel lớn",
      "Chỉ hỗ trợ một tập tin duy nhất",
      "Tất cả dịch vụ chạy trong trình duyệt",
      "Không có kernel"
    ],
    "correct": 0,
    "why": "Monolithic kernel: nhiều dịch vụ chạy ở kernel mode, thường giảm chi phí gọi qua lại.; Microkernel: kernel nhỏ, nhiều dịch vụ ở user mode, tăng cô lập lỗi.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q10",
    "q": "[C2_Q10] Microkernel có xu hướng thiết kế như thế nào? (Đề gốc: Câu 1)",
    "a": [
      "Không cho phép quản lý tiến trình",
      "Loại bỏ cơ chế truyền thông",
      "Giữ kernel nhỏ, chuyển nhiều dịch vụ ra không gian người dùng",
      "Đưa toàn bộ ứng dụng văn phòng vào kernel"
    ],
    "correct": 2,
    "why": "Microkernel giữ nhân nhỏ, dịch vụ chuyển ra user space.; Ưu: dễ bảo trì/cô lập lỗi; nhược: tăng chi phí IPC.",
    "ref": "Trang 6",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q11",
    "q": "[C2_Q11] Ưu điểm thường gặp của microkernel là gì? (Đề gốc: Câu 2)",
    "a": [
      "Không cần bộ nhớ",
      "Dễ mở rộng, dễ bảo trì và tăng tính cô lập lỗi",
      "Không cần truyền thông giữa thành phần",
      "Luôn nhanh hơn mọi kernel khác trong mọi trường hợp"
    ],
    "correct": 1,
    "why": "Ý chính: Dễ mở rộng, dễ bảo trì và tăng tính cô lập lỗi.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q12",
    "q": "[C2_Q12] Nhược điểm có thể gặp của microkernel là gì? (Đề gốc: Câu 55)",
    "a": [
      "Chi phí truyền thông giữa các thành phần có thể cao hơn",
      "Không hỗ trợ bộ nhớ",
      "Không thể chạy ứng dụng",
      "Không thể bảo vệ hệ thống"
    ],
    "correct": 0,
    "why": "Ý chính: Chi phí truyền thông giữa các thành phần có thể cao hơn.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q13",
    "q": "[C2_Q13] Module kernel giúp ích gì? (Đề gốc: Câu 41)",
    "a": [
      "Không liên quan đến trình điều khiển thiết bị",
      "Cho phép nạp/gỡ một số chức năng kernel linh hoạt khi cần",
      "Chỉ dùng để vẽ biểu tượng",
      "Làm hệ điều hành mất khả năng mở rộng"
    ],
    "correct": 1,
    "why": "Ý chính: Cho phép nạp/gỡ một số chức năng kernel linh hoạt khi cần.; OS services gồm thực thi chương trình, I/O, quản lý tệp, truyền thông, bảo vệ.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q14",
    "q": "[C2_Q14] Trình điều khiển thiết bị (device driver) có vai trò gì? (Đề gốc: Câu 14)",
    "a": [
      "Chỉ để thay đổi hình nền",
      "Giúp hệ điều hành giao tiếp và điều khiển thiết bị phần cứng",
      "Chỉ tạo tài khoản người dùng",
      "Chỉ dùng để lưu mật khẩu"
    ],
    "correct": 1,
    "why": "Ý chính: Giúp hệ điều hành giao tiếp và điều khiển thiết bị phần cứng.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C2_Q15",
    "q": "[C2_Q15] Khi thiết kế hệ điều hành, yếu tố nào cần cân bằng? (Đề gốc: Câu 69)",
    "a": [
      "Chỉ màu sắc giao diện",
      "Chỉ số lượng biểu tượng",
      "Hiệu năng, an toàn, dễ mở rộng và dễ bảo trì",
      "Chỉ tên thư mục"
    ],
    "correct": 2,
    "why": "Ý chính: Hiệu năng, an toàn, dễ mở rộng và dễ bảo trì.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Trang 7",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q01",
    "q": "[C3_Q01] Tiến trình là gì? (Đề gốc: Câu 98)",
    "a": [
      "Một tập tin ảnh trên đĩa",
      "Một chương trình đang được thực thi",
      "Một thiết bị phần cứng",
      "Một phím tắt trên màn hình"
    ],
    "correct": 1,
    "why": "Ý chính: Một chương trình đang được thực thi.; Process = chương trình đang thực thi; PCB lưu PID, trạng thái, thanh ghi, bộ đếm lệnh.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q02",
    "q": "[C3_Q02] Điểm khác nhau cơ bản giữa chương trình và tiến trình là gì? (Đề gốc: Câu 75)",
    "a": [
      "Không có khác biệt nào",
      "Chương trình là mã tĩnh, tiến trình là chương trình đang thực thi",
      "Chương trình luôn chạy, tiến trình luôn tắt",
      "Chương trình là phần cứng, tiến trình là dây cáp"
    ],
    "correct": 1,
    "why": "Ý chính: Chương trình là mã tĩnh, tiến trình là chương trình đang thực thi.; Ready chờ CPU; Running đang chạy; Blocked chờ sự kiện/I/O.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q03",
    "q": "[C3_Q03] PCB (Process Control Block) dùng để làm gì? (Đề gốc: Câu 84)",
    "a": [
      "Lưu hình nền hệ thống",
      "Lưu thông tin quản lý tiến trình như trạng thái, thanh ghi, bộ đếm chương trình",
      "Lưu tốc độ quạt máy tính",
      "Lưu danh sách phím tắt trình duyệt"
    ],
    "correct": 1,
    "why": "Ý chính: Lưu thông tin quản lý tiến trình như trạng thái, thanh ghi, bộ đếm chương trình.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q04",
    "q": "[C3_Q04] Trạng thái Ready của tiến trình có nghĩa là gì? (Đề gốc: Câu 100)",
    "a": [
      "Tiến trình đã kết thúc hoàn toàn",
      "Tiến trình đã sẵn sàng chạy và đang chờ CPU",
      "Tiến trình đang chờ I/O",
      "Tiến trình chưa được tạo"
    ],
    "correct": 1,
    "why": "Ý chính: Tiến trình đã sẵn sàng chạy và đang chờ CPU.; Process = chương trình đang thực thi; PCB lưu PID, trạng thái, thanh ghi, bộ đếm lệnh.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q05",
    "q": "[C3_Q05] Trạng thái Running của tiến trình có nghĩa là gì? (Đề gốc: Câu 87)",
    "a": [
      "Tiến trình đang nằm trong ổ đĩa ngoài",
      "Tiến trình đang được CPU thực thi",
      "Tiến trình chưa được nạp vào bộ nhớ",
      "Tiến trình đã bị xóa"
    ],
    "correct": 1,
    "why": "Ý chính: Tiến trình đang được CPU thực thi.; Ready chờ CPU; Running đang chạy; Blocked chờ sự kiện/I/O.",
    "ref": "Trang 8",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q06",
    "q": "[C3_Q06] Trạng thái Waiting/Blocked thường xảy ra khi nào? (Đề gốc: Câu 5)",
    "a": [
      "Tiến trình không tồn tại",
      "Tiến trình đang chiếm CPU",
      "Tiến trình đã hoàn tất mọi công việc",
      "Tiến trình chờ I/O hoặc chờ một sự kiện"
    ],
    "correct": 3,
    "why": "Ý chính: Tiến trình chờ I/O hoặc chờ một sự kiện.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q07",
    "q": "[C3_Q07] Chuyển ngữ cảnh (context switch) là gì? (Đề gốc: Câu 52)",
    "a": [
      "Đổi màu giao diện hệ điều hành",
      "Sao chép tập tin sang USB",
      "Lưu trạng thái tiến trình hiện tại và nạp trạng thái tiến trình khác",
      "Tắt màn hình"
    ],
    "correct": 2,
    "why": "Context switch: lưu trạng thái tiến trình cũ, nạp trạng thái tiến trình mới.; PCB lưu thông tin cần thiết để tiếp tục thực thi.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q08",
    "q": "[C3_Q08] Chuyển ngữ cảnh quá nhiều có thể gây hậu quả gì? (Đề gốc: Câu 31)",
    "a": [
      "Tăng overhead và làm giảm hiệu năng hệ thống",
      "Làm CPU biến mất",
      "Tăng dung lượng ổ cứng vật lý",
      "Làm chương trình không cần bộ nhớ"
    ],
    "correct": 0,
    "why": "Context switch lưu/phục hồi trạng thái tiến trình, tạo overhead.; Chuyển ngữ cảnh quá thường xuyên làm giảm thời gian CPU xử lý công việc hữu ích.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q09",
    "q": "[C3_Q09] Trong Linux/Unix, fork() thường dùng để làm gì? (Đề gốc: Câu 28)",
    "a": [
      "Tạo một tiến trình con từ tiến trình hiện tại",
      "Xóa toàn bộ hệ điều hành",
      "Thay đổi độ phân giải màn hình",
      "Đổi tên máy tính"
    ],
    "correct": 0,
    "why": "Ý chính: Tạo một tiến trình con từ tiến trình hiện tại.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q10",
    "q": "[C3_Q10] Sau fork(), tiến trình cha và tiến trình con có đặc điểm nào? (Đề gốc: Câu 77)",
    "a": [
      "Chỉ tiến trình con được tiếp tục",
      "Cùng tiếp tục thực thi từ sau lời gọi fork(), nhưng có PID khác nhau",
      "Chỉ tiến trình cha được tiếp tục",
      "Cả hai đều bị xóa ngay"
    ],
    "correct": 1,
    "why": "Ý chính: Cùng tiếp tục thực thi từ sau lời gọi fork(), nhưng có PID khác nhau.; Process = chương trình đang thực thi; PCB lưu PID, trạng thái, thanh ghi, bộ đếm lệnh.",
    "ref": "Trang 9",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q11",
    "q": "[C3_Q11] exec() thường dùng để làm gì? (Đề gốc: Câu 46)",
    "a": [
      "Tắt CPU",
      "Tạo giao diện đồ họa",
      "Thay thế chương trình đang chạy trong tiến trình bằng chương trình khác",
      "Tạo bản sao ổ cứng"
    ],
    "correct": 2,
    "why": "exec() thay thế ảnh chương trình trong tiến trình hiện tại, không tạo PID mới.; fork() tạo tiến trình con; wait() chờ con kết thúc.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q12",
    "q": "[C3_Q12] wait() thường được tiến trình cha dùng để làm gì? (Đề gốc: Câu 58)",
    "a": [
      "Tăng tốc độ mạng",
      "Đổi mật khẩu hệ thống",
      "Chờ tiến trình con kết thúc và thu nhận trạng thái kết thúc",
      "Tạo tập tin tạm"
    ],
    "correct": 2,
    "why": "Ý chính: Chờ tiến trình con kết thúc và thu nhận trạng thái kết thúc.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q13",
    "q": "[C3_Q13] Tiến trình zombie là tiến trình như thế nào? (Đề gốc: Câu 54)",
    "a": [
      "Đang chạy trên CPU mạnh nhất",
      "Đã kết thúc nhưng thông tin trạng thái chưa được tiến trình cha thu nhận",
      "Đang chờ bàn phím",
      "Chưa từng được tạo"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q14",
    "q": "[C3_Q14] Tiến trình orphan là tiến trình như thế nào? (Đề gốc: Câu 83)",
    "a": [
      "Tiến trình không có PID",
      "Tiến trình đang chạy trong chế độ nhân duy nhất",
      "Tiến trình con còn chạy nhưng tiến trình cha đã kết thúc",
      "Tiến trình không có mã chương trình"
    ],
    "correct": 2,
    "why": "Orphan: tiến trình cha kết thúc khi con còn sống; hệ thống nhận nuôi con.; Zombie: con đã kết thúc nhưng cha chưa thu nhận trạng thái.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q15",
    "q": "[C3_Q15] Luồng (thread) là gì? (Đề gốc: Câu 32)",
    "a": [
      "Một loại tập tin văn bản",
      "Một thiết bị nhập dữ liệu",
      "Một thư mục hệ thống",
      "Đơn vị thực thi nhẹ bên trong một tiến trình"
    ],
    "correct": 3,
    "why": "Thread là đơn vị thực thi trong process; chia sẻ không gian địa chỉ.; Mỗi thread có stack, thanh ghi và bộ đếm chương trình riêng.",
    "ref": "Trang 10",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q16",
    "q": "[C3_Q16] Các luồng trong cùng một tiến trình thường chia sẻ gì? (Đề gốc: Câu 63)",
    "a": [
      "Mỗi luồng luôn có kernel riêng",
      "Không gian địa chỉ và tài nguyên của tiến trình",
      "Mỗi luồng luôn có một ổ cứng riêng",
      "Không chia sẻ bất kỳ tài nguyên nào"
    ],
    "correct": 1,
    "why": "Các luồng cùng process chia sẻ code, data, heap và tệp đang mở.; Mỗi luồng có stack, thanh ghi và program counter riêng.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q17",
    "q": "[C3_Q17] Lợi ích của đa luồng là gì? (Đề gốc: Câu 19)",
    "a": [
      "Loại bỏ nhu cầu đồng bộ hóa",
      "Tăng khả năng đáp ứng và tận dụng CPU đa lõi tốt hơn",
      "Làm mọi lỗi lập trình biến mất",
      "Không cần hệ điều hành quản lý"
    ],
    "correct": 1,
    "why": "Đa luồng cải thiện responsiveness và khả năng tận dụng CPU đa lõi.; Các luồng chia sẻ dữ liệu nên vẫn cần đồng bộ.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q18",
    "q": "[C3_Q18] Vì sao đa luồng có thể gây khó khăn? (Đề gốc: Câu 86)",
    "a": [
      "Vì không thể dùng CPU đa lõi",
      "Vì không thể chia sẻ bộ nhớ",
      "Cần đồng bộ khi nhiều luồng truy cập dữ liệu dùng chung",
      "Vì mọi luồng luôn chạy tuần tự tuyệt đối"
    ],
    "correct": 2,
    "why": "Ý chính: Cần đồng bộ khi nhiều luồng truy cập dữ liệu dùng chung.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q19",
    "q": "[C3_Q19] IPC (Interprocess Communication) là gì? (Đề gốc: Câu 29)",
    "a": [
      "Cơ chế giao tiếp giữa các tiến trình",
      "Một loại ổ cứng",
      "Bộ nhớ đệm của màn hình",
      "Một lệnh tắt máy"
    ],
    "correct": 0,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C3_Q20",
    "q": "[C3_Q20] Shared memory trong IPC có ưu điểm nào? (Đề gốc: Câu 96)",
    "a": [
      "Chỉ dùng được cho một tiến trình",
      "Không cần hệ điều hành cấp phát",
      "Không cần đồng bộ hóa trong mọi trường hợp",
      "Trao đổi dữ liệu nhanh vì các tiến trình cùng truy cập vùng nhớ chung"
    ],
    "correct": 3,
    "why": "Shared memory: nhiều tiến trình cùng truy cập vùng nhớ, trao đổi nhanh.; Cần đồng bộ khi ghi/đọc đồng thời để tránh race condition.",
    "ref": "Trang 11",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q01",
    "q": "[C4_Q01] Định thời CPU là gì? (Đề gốc: Câu 76)",
    "a": [
      "Chọn màu sắc giao diện hệ thống",
      "Chọn tên tập tin để lưu",
      "Chọn tiến trình trong hàng đợi sẵn sàng để cấp CPU thực thi",
      "Chọn thiết bị âm thanh mặc định"
    ],
    "correct": 2,
    "why": "Ý chính: Chọn tiến trình trong hàng đợi sẵn sàng để cấp CPU thực thi.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q02",
    "q": "[C4_Q02] Bộ định thời ngắn hạn (short-term scheduler) chọn tiến trình từ đâu? (Đề gốc: Câu 20)",
    "a": [
      "Thùng rác",
      "Danh bạ người dùng",
      "Hàng đợi sẵn sàng",
      "Bộ nhớ ROM"
    ],
    "correct": 2,
    "why": "Ý chính: Hàng đợi sẵn sàng.; RR chia thời gian theo quantum; quantum quá nhỏ tăng context switch.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q03",
    "q": "[C4_Q03] Dispatch là gì trong định thời CPU? (Đề gốc: Câu 65)",
    "a": [
      "Xóa một tiến trình khỏi ổ đĩa",
      "Tăng dung lượng RAM",
      "Đổi tên thư mục",
      "Chuyển CPU cho tiến trình được chọn thực thi"
    ],
    "correct": 3,
    "why": "Ý chính: Chuyển CPU cho tiến trình được chọn thực thi.; Waiting time: thời gian chờ ready; turnaround = hoàn thành − đến; response = chạy lần đầu − đến.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q04",
    "q": "[C4_Q04] Thời gian chờ (waiting time) là gì? (Đề gốc: Câu 13)",
    "a": [
      "Thời gian tiến trình dùng thiết bị mạng",
      "Thời gian tắt màn hình",
      "Thời gian hệ thống khởi động BIOS",
      "Tổng thời gian tiến trình chờ trong hàng đợi sẵn sàng"
    ],
    "correct": 3,
    "why": "Ý chính: Tổng thời gian tiến trình chờ trong hàng đợi sẵn sàng.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 12",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q05",
    "q": "[C4_Q05] Thời gian quay vòng (turnaround time) được tính như thế nào? (Đề gốc: Câu 11) (Đề gốc: Câu 68)",
    "a": [
      "Thời điểm hoàn thành trừ thời điểm đến",
      "Thời điểm đến trừ thời điểm hoàn thành",
      "Thời gian chờ trừ burst time",
      "Burst time trừ thời điểm đến"
    ],
    "correct": 0,
    "why": "Turnaround time = completion time − arrival time.; Waiting time = turnaround − tổng CPU burst (trong bài toán chỉ có CPU burst).",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q06",
    "q": "[C4_Q06] Thời gian đáp ứng (response time) là gì? (Đề gốc: Câu 68)",
    "a": [
      "Thời gian sao chép tập tin",
      "Thời gian từ khi máy tính bật đến khi tắt",
      "Thời gian từ khi tiến trình đến khi được CPU phục vụ lần đầu",
      "Thời gian cài đặt hệ điều hành"
    ],
    "correct": 2,
    "why": "Response time = thời điểm được CPU lần đầu − thời điểm đến.; Turnaround = hoàn thành − đến; waiting = tổng thời gian chờ ready.",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q07",
    "q": "[C4_Q07] Thuật toán FCFS chọn tiến trình theo nguyên tắc nào? (Đề gốc: Câu 30)",
    "a": [
      "Burst time dài nhất trước",
      "Đến trước phục vụ trước",
      "Ngẫu nhiên tuyệt đối",
      "Ưu tiên thấp nhất trước"
    ],
    "correct": 1,
    "why": "Ý chính: Đến trước phục vụ trước.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q08",
    "q": "[C4_Q08] Nhược điểm nổi bật của FCFS là gì? (Đề gốc: Câu 71)",
    "a": [
      "Có thể gây hiệu ứng đoàn tàu (convoy effect)",
      "Luôn cần biết burst time tương lai",
      "Luôn gây deadlock",
      "Không thể chạy tiến trình nào"
    ],
    "correct": 0,
    "why": "FCFS có convoy effect: tiến trình ngắn chờ sau tiến trình dài.; FCFS không trưng dụng, đơn giản nhưng thời gian chờ có thể cao.",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q09",
    "q": "[C4_Q09] SJF không trưng dụng chọn tiến trình nào? (Đề gốc: Câu 48)",
    "a": [
      "Tiến trình đến sau cùng",
      "Tiến trình sẵn sàng có CPU burst ngắn nhất",
      "Tiến trình có PID lớn nhất",
      "Tiến trình dùng nhiều bộ nhớ nhất"
    ],
    "correct": 1,
    "why": "SJF không trưng dụng chọn tiến trình ready có CPU burst ngắn nhất.; SRTF là phiên bản có trưng dụng dựa vào thời gian còn lại.",
    "ref": "Trang 13",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q10",
    "q": "[C4_Q10] SRTF là phiên bản nào của SJF? (Đề gốc: Câu 57)",
    "a": [
      "Chỉ dùng cho hệ thống tập tin",
      "Chỉ chọn tiến trình ưu tiên thấp",
      "Có trưng dụng, chọn tiến trình có thời gian còn lại ngắn nhất",
      "Không trưng dụng, chọn tiến trình dài nhất"
    ],
    "correct": 2,
    "why": "SRTF = Shortest Remaining Time First, phiên bản SJF có trưng dụng.; Tiến trình mới có thời gian còn lại ngắn hơn có thể giành CPU.",
    "ref": "Trang 14",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q11",
    "q": "[C4_Q11] Khó khăn chính khi áp dụng SJF/SRTF trong thực tế là gì? (Đề gốc: Câu 27)",
    "a": [
      "Khó biết chính xác CPU burst tiếp theo",
      "Không cần bộ định thời",
      "Không thể tính thời gian chờ",
      "Không có hàng đợi sẵn sàng"
    ],
    "correct": 0,
    "why": "SJF/SRTF khó biết trước CPU burst; có thể dự đoán bằng exponential averaging.; SJF không trưng dụng; SRTF có trưng dụng và có thể gây starvation.",
    "ref": "Trang 14",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q12",
    "q": "[C4_Q12] Round Robin phù hợp với loại hệ thống nào? (Đề gốc: Câu 40)",
    "a": [
      "Hệ tương tác và chia sẻ thời gian",
      "Hệ không có CPU",
      "Hệ chỉ xử lý một chương trình duy nhất",
      "Hệ không có tiến trình"
    ],
    "correct": 0,
    "why": "Round Robin thích hợp hệ tương tác/time-sharing vì luân phiên cấp CPU.; Quantum ảnh hưởng độ đáp ứng và chi phí chuyển ngữ cảnh.",
    "ref": "Trang 14",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q13",
    "q": "[C4_Q13] Trong Round Robin, quantum là gì? (Đề gốc: Câu 62)",
    "a": [
      "Số lượng tập tin trong thư mục",
      "Khoảng thời gian tối đa một tiến trình được giữ CPU mỗi lượt",
      "Dung lượng ổ cứng",
      "Kích thước màn hình"
    ],
    "correct": 1,
    "why": "Time quantum: thời lượng CPU tối đa mỗi lượt trong Round Robin.; Quantum nhỏ: nhiều context switch; quá lớn: RR gần FCFS.",
    "ref": "Trang 14",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q14",
    "q": "[C4_Q14] Nếu quantum quá nhỏ trong Round Robin, điều gì sẽ xảy ra? (Đề gốc: Câu 39)",
    "a": [
      "Không còn tiến trình nào chờ",
      "Mọi tiến trình chạy song song tuyệt đối",
      "Tăng số lần chuyển ngữ cảnh",
      "CPU không cần định thời"
    ],
    "correct": 2,
    "why": "Quantum quá nhỏ làm tăng context switch và overhead.; Quantum quá lớn làm RR gần FCFS.",
    "ref": "Trang 14",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q15",
    "q": "[C4_Q15] Priority Scheduling chọn tiến trình dựa trên gì? (Đề gốc: Câu 67)",
    "a": [
      "Tên tiến trình theo thứ tự chữ cái",
      "Mức ưu tiên của tiến trình",
      "Số lượng tập tin trong máy",
      "Kích thước biểu tượng"
    ],
    "correct": 1,
    "why": "Ý chính: Mức ưu tiên của tiến trình.; Waiting time: thời gian chờ ready; turnaround = hoàn thành − đến; response = chạy lần đầu − đến.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q16",
    "q": "[C4_Q16] Starvation trong định thời là gì? (Đề gốc: Câu 36)",
    "a": [
      "Tiến trình luôn được chọn đầu tiên",
      "Bộ nhớ bị xóa hoàn toàn",
      "CPU bị thiếu điện",
      "Một tiến trình chờ quá lâu vì liên tục không được chọn"
    ],
    "correct": 3,
    "why": "Starvation là tiến trình chờ rất lâu vì liên tục không được chọn.; Aging tăng dần độ ưu tiên của tiến trình chờ lâu.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q17",
    "q": "[C4_Q17] Aging dùng để làm gì? (Đề gốc: Câu 18)",
    "a": [
      "Tăng dần ưu tiên của tiến trình chờ lâu để giảm starvation",
      "Giảm tốc độ CPU",
      "Tăng kích thước màn hình",
      "Xóa hàng đợi sẵn sàng"
    ],
    "correct": 0,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q18",
    "q": "[C4_Q18] MLFQ là gì? (Đề gốc: Câu 90)",
    "a": [
      "Một lệnh tắt tiến trình",
      "Một giao diện đồ họa",
      "Định thời dùng nhiều hàng đợi phản hồi với mức ưu tiên khác nhau",
      "Một loại bộ nhớ ngoài"
    ],
    "correct": 2,
    "why": "MLFQ = Multilevel Feedback Queue: nhiều hàng đợi ưu tiên, cho phép thay đổi mức.; Ưu tiên được điều chỉnh theo hành vi sử dụng CPU/I/O.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q19",
    "q": "[C4_Q19] Ý tưởng chính của MLFQ là gì? (Đề gốc: Câu 82)",
    "a": [
      "Điều chỉnh mức ưu tiên dựa trên hành vi CPU/I/O của tiến trình",
      "Không cần quantum",
      "Chỉ chạy tiến trình có PID nhỏ nhất",
      "Không dùng hàng đợi"
    ],
    "correct": 0,
    "why": "MLFQ điều chỉnh ưu tiên theo hành vi: dùng hết quantum thường hạ mức.; Tiến trình I/O-bound thường được ưu tiên đáp ứng nhanh; có thể tăng ưu tiên chống starvation.",
    "ref": "Trang 15",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q20",
    "q": "[C4_Q20] Processor affinity có nghĩa là gì? (Đề gốc: Câu 70)",
    "a": [
      "Chuyển tiến trình sang ổ cứng",
      "Xu hướng giữ tiến trình/luồng chạy trên cùng một lõi CPU",
      "Xóa tiến trình khỏi bộ nhớ",
      "Tắt một lõi CPU vĩnh viễn"
    ],
    "correct": 1,
    "why": "Processor affinity: xu hướng chạy tiến trình/luồng trên cùng CPU/lõi.; Lợi ích: cache locality, giảm chi phí di chuyển giữa các lõi.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q21",
    "q": "[C4_Q21] Lợi ích của processor affinity là gì? (Đề gốc: Câu 42)",
    "a": [
      "Tận dụng cache tốt hơn và giảm chi phí chuyển lõi",
      "Không cần bộ nhớ cache",
      "Loại bỏ hoàn toàn cân định thời",
      "Làm mọi tiến trình kết thúc ngay"
    ],
    "correct": 0,
    "why": "Processor affinity giữ tiến trình trên lõi quen thuộc để tận dụng cache.; Load balancing phân bố tải giữa các lõi, đôi khi cần di chuyển tiến trình.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q22",
    "q": "[C4_Q22] Load balancing trên hệ đa lõi nhằm mục tiêu gì? (Đề gốc: Câu 78)",
    "a": [
      "Chỉ chạy một tiến trình trên toàn hệ thống",
      "Phân bố tải công việc tương đối đều giữa các lõi CPU",
      "Tắt tất cả lõi phụ",
      "Xóa hàng đợi sẵn sàng"
    ],
    "correct": 1,
    "why": "Ý chính: Phân bố tải công việc tương đối đều giữa các lõi CPU.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q23",
    "q": "[C4_Q23] Định thời thời gian thực hard real-time yêu cầu điều gì? (Đề gốc: Câu 4)",
    "a": [
      "Có thể trễ tùy ý",
      "Chỉ cần giao diện đẹp",
      "Không cần deadline",
      "Phải đáp ứng đúng hạn chặt chẽ"
    ],
    "correct": 3,
    "why": "Hard real-time: trễ deadline có thể là lỗi hệ thống nghiêm trọng.; Soft real-time: trễ deadline làm giảm chất lượng nhưng không nhất thiết thất bại.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q24",
    "q": "[C4_Q24] EDF (Earliest Deadline First) chọn công việc nào trước? (Đề gốc: Câu 6)",
    "a": [
      "Công việc có thời hạn gần nhất",
      "Công việc có tên dài nhất",
      "Công việc có PID lớn nhất",
      "Công việc có thời hạn xa nhất"
    ],
    "correct": 0,
    "why": "EDF = Earliest Deadline First: deadline gần nhất được ưu tiên.; Hard real-time yêu cầu đáp ứng hạn chót nghiêm ngặt.",
    "ref": "Trang 16",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C4_Q25",
    "q": "[C4_Q25] Khi đánh giá thuật toán định thời, nhận định nào đúng nhất? (Đề gốc: Câu 45) (Đề gốc: Câu 88)",
    "a": [
      "Round Robin không cần quantum",
      "SJF không cần biết burst time",
      "Không có thuật toán tối ưu cho mọi mục tiêu và mọi hệ thống",
      "FCFS luôn tốt nhất trong mọi trường hợp"
    ],
    "correct": 2,
    "why": "Ý chính: Không có thuật toán tối ưu cho mọi mục tiêu và mọi hệ thống.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Trang 17",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q01",
    "q": "[C5_Q01] Đồng bộ hóa tiến trình cần thiết khi nào? (Đề gốc: Câu 88)",
    "a": [
      "Khi không có CPU",
      "Khi nhiều tiến trình/luồng cùng truy cập tài nguyên hoặc dữ liệu dùng chung",
      "Khi hệ thống không có bộ nhớ",
      "Khi chỉ có một tiến trình duy nhất và không có dữ liệu chia sẻ"
    ],
    "correct": 1,
    "why": "Ý chính: Khi nhiều tiến trình/luồng cùng truy cập tài nguyên hoặc dữ liệu dùng chung.; Critical section: đoạn mã truy cập dữ liệu chung; race condition do thứ tự thực thi xen kẽ.",
    "ref": "Trang 17",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q02",
    "q": "[C5_Q02] Race condition là gì? (Đề gốc: Câu 91)",
    "a": [
      "Một phương pháp nén tập tin",
      "Một thuật toán định thời theo ưu tiên",
      "Một loại bộ nhớ ảo",
      "Kết quả phụ thuộc vào thứ tự thực thi xen kẽ của các tiến trình/luồng"
    ],
    "correct": 3,
    "why": "Ý chính: Kết quả phụ thuộc vào thứ tự thực thi xen kẽ của các tiến trình/luồng.; Ba yêu cầu: mutual exclusion, progress, bounded waiting.",
    "ref": "Trang 17",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q03",
    "q": "[C5_Q03] Hậu quả của race condition có thể là gì? (Đề gốc: Câu 34)",
    "a": [
      "Tăng độ phân giải màn hình",
      "Giảm số lượng tiến trình về 0",
      "Tăng dung lượng ổ cứng",
      "Dữ liệu sai lệch hoặc không nhất quán"
    ],
    "correct": 3,
    "why": "Ý chính: Dữ liệu sai lệch hoặc không nhất quán.; Semaphore: wait()/signal(); mutex bảo vệ vùng tới hạn; busy waiting tiêu tốn CPU.",
    "ref": "Trang 17",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q04",
    "q": "[C5_Q04] Miền tương trục (critical section) là gì? (Đề gốc: Câu 93)",
    "a": [
      "Một loại thiết bị vào/ra",
      "Đoạn mã truy cập hoặc cập nhật dữ liệu/tài nguyên dùng chung",
      "Một thư mục hệ thống",
      "Phần giao diện đăng nhập"
    ],
    "correct": 1,
    "why": "Ý chính: Đoạn mã truy cập hoặc cập nhật dữ liệu/tài nguyên dùng chung.; Critical section: đoạn mã truy cập dữ liệu chung; race condition do thứ tự thực thi xen kẽ.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q05",
    "q": "[C5_Q05] Yêu cầu loại trừ hỗ tương (mutual exclusion) nghĩa là gì? (Đề gốc: Câu 21)",
    "a": [
      "Mọi tiến trình phải kết thúc cùng lúc",
      "Tại một thời điểm, chỉ một tiến trình được vào miền tương trục",
      "Không tiến trình nào được chạy",
      "Tất cả tiến trình phải cùng vào miền tương trục"
    ],
    "correct": 1,
    "why": "Ý chính: Tại một thời điểm, chỉ một tiến trình được vào miền tương trục.; Ba yêu cầu: mutual exclusion, progress, bounded waiting.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q06",
    "q": "[C5_Q06] Yêu cầu tiến triển (progress) trong bài toán miền tương trục nghĩa gì? (Đề gốc: Câu 8)",
    "a": [
      "CPU phải luôn tắt khi có tranh chấp",
      "Tiến trình không được truy cập dữ liệu",
      "Tiến trình luôn phải chạy theo FIFO",
      "Nếu miền tương trục đang rỗng và có tiến trình muốn vào, việc lựa chọn không bị trì hoãn vô hạn"
    ],
    "correct": 3,
    "why": "Ý chính: Nếu miền tương trục đang rỗng và có tiến trình muốn vào, việc lựa chọn không bị trì hoãn vô hạn.; Semaphore: wait()/signal(); mutex bảo vệ vùng tới hạn; busy waiting tiêu tốn CPU.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q07",
    "q": "[C5_Q07] Yêu cầu chờ đợi hữu hạn (bounded waiting) nhằm tránh điều gì? (Đề gốc: Câu 53) (Đề gốc: Câu 26)",
    "a": [
      "Xóa dữ liệu dùng chung",
      "Tăng dung lượng RAM",
      "Tăng tốc CPU",
      "Starvation"
    ],
    "correct": 3,
    "why": "Bounded waiting: giới hạn số lần tiến trình khác vượt lên trước.; Giúp ngăn starvation; khác progress và mutual exclusion.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q08",
    "q": "[C5_Q08] Peterson là giải pháp phần mềm kinh điển cho trường hợp nào? (Đề gốc: Câu 25)",
    "a": [
      "Hai tiến trình tranh chấp miền tương trục",
      "Định thời đĩa",
      "Hàng triệu tiến trình không cần biến chia sẻ",
      "Quản lý tập tin ảnh"
    ],
    "correct": 0,
    "why": "Peterson: thuật toán phần mềm cổ điển cho hai tiến trình.; Dùng flag[] và turn; có busy waiting.",
    "ref": "Trang 18",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q09",
    "q": "[C5_Q09] Bakery Algorithm dùng ý tưởng nào? (Đề gốc: Câu 26)",
    "a": [
      "Tiến trình có tên dài nhất vào trước",
      "Mỗi tiến trình lấy số thứ tự, số nhỏ hơn được ưu tiên vào trước",
      "Tiến trình dùng nhiều RAM nhất vào trước",
      "Tiến trình vào ngẫu nhiên không kiểm soát"
    ],
    "correct": 1,
    "why": "Bakery Algorithm cấp số thứ tự (ticket) để quyết định lượt vào vùng tới hạn.; Nếu số bằng nhau, dùng PID để phân xử; là giải pháp phần mềm loại trừ tương hỗ.",
    "ref": "Trang 19",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q10",
    "q": "[C5_Q10] Hạn chế thường gặp của các giải pháp phần mềm đồng bộ là gì? (Đề gốc: Câu 51) (Đề gốc: Câu 89)",
    "a": [
      "Luôn loại bỏ mọi lỗi lập trình",
      "Có thể gây chờ bận và khó mở rộng",
      "Không cần biến chia sẻ",
      "Không thể minh họa bằng thuật toán"
    ],
    "correct": 1,
    "why": "Busy waiting = lặp kiểm tra liên tục, gây tốn CPU.; Peterson áp dụng kinh điển cho 2 tiến trình; spinlock sử dụng chờ bận.",
    "ref": "Trang 19",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q11",
    "q": "[C5_Q11] Chờ bận (busy waiting) là gì? (Đề gốc: Câu 89)",
    "a": [
      "Tiến trình ngủ và không chiếm CPU",
      "Tiến trình liên tục kiểm tra điều kiện trong khi chờ",
      "Tiến trình không tồn tại trong bộ nhớ",
      "Tiến trình đã kết thúc"
    ],
    "correct": 1,
    "why": "Ý chính: Tiến trình liên tục kiểm tra điều kiện trong khi chờ.; Ba yêu cầu: mutual exclusion, progress, bounded waiting.",
    "ref": "Trang 19",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q12",
    "q": "[C5_Q12] Disable interrupt bảo vệ miền tương tranh bằng cách nào? (Đề gốc: Câu 60)",
    "a": [
      "Tạo thêm nhiều tiến trình",
      "Tăng dung lượng ổ đĩa",
      "Xóa tài nguyên dùng chung",
      "Tạm thời vô hiệu hóa ngắt để tránh bị gián đoạn trong đoạn mã cần bảo vệ"
    ],
    "correct": 3,
    "why": "Disable interrupts tránh bị ngắt trên CPU đang chạy trong đoạn mã bảo vệ.; Không đủ bảo vệ giữa nhiều CPU và không nên tắt ngắt quá lâu.",
    "ref": "Trang 19",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q13",
    "q": "[C5_Q13] Test-and-Set là loại thao tác gì? (Đề gốc: Câu 12)",
    "a": [
      "Thao tác sao chép hình ảnh",
      "Thao tác đổi tên thư mục",
      "Thao tác nguyên tử dùng để kiểm tra và đặt khóa",
      "Thao tác tắt màn hình"
    ],
    "correct": 2,
    "why": "Test-and-Set là thao tác nguyên tử đọc giá trị cũ và đặt giá trị mới.; Dùng xây dựng spinlock; có thể gây busy waiting.",
    "ref": "Trang 19",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q14",
    "q": "[C5_Q14] Compare-and-Swap hoạt động theo ý tưởng nào? (Đề gốc: Câu 95)",
    "a": [
      "Tắt mọi ngắt vĩnh viễn",
      "So sánh giá trị hiện tại với giá trị kỳ vọng, nếu khớp thì cập nhật giá trị mới",
      "So sánh hai hình nền",
      "Chuyển tiến trình sang trạng thái zombie"
    ],
    "correct": 1,
    "why": "Compare-and-Swap (CAS): nếu giá trị hiện tại bằng kỳ vọng thì thay bằng giá trị mới.; CAS là thao tác nguyên tử, dùng trong đồng bộ không khóa hoặc xây dựng khóa.",
    "ref": "Trang 20",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q15",
    "q": "[C5_Q15] Semaphore là gì? (Đề gốc: Câu 97)",
    "a": [
      "Một loại màn hình cảm ứng",
      "Một trình duyệt web",
      "Một định dạng tập tin ảnh",
      "Công cụ đồng bộ hóa dựa trên một biến nguyên và các thao tác nguyên tử"
    ],
    "correct": 3,
    "why": "Semaphore là biến đếm được thao tác nguyên tử bằng wait() và signal().; Binary semaphore: 0/1; counting semaphore: quản lý nhiều đơn vị tài nguyên.",
    "ref": "Trang 20",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q16",
    "q": "[C5_Q16] Hai thao tác cơ bản của semaphore là gì? (Đề gốc: Câu 7)",
    "a": [
      "start() và shutdown()",
      "read() và print()",
      "wait() và signal()",
      "open() và close()"
    ],
    "correct": 2,
    "why": "Ý chính: wait() và signal().; Critical section: đoạn mã truy cập dữ liệu chung; race condition do thứ tự thực thi xen kẽ.",
    "ref": "Trang 20",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q17",
    "q": "[C5_Q17] Binary semaphore thường có giá trị nào? (Đề gốc: Câu 49)",
    "a": [
      "Chỉ số âm",
      "0 hoặc 1",
      "Bất kỳ chuỗi ký tự nào",
      "Luôn bằng 100"
    ],
    "correct": 1,
    "why": "Binary semaphore có hai trạng thái logic 0 và 1.; Counting semaphore đếm nhiều tài nguyên; wait giảm, signal tăng theo ngữ nghĩa semaphore.",
    "ref": "Trang 20",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q18",
    "q": "[C5_Q18] Counting semaphore phù hợp để làm gì? (Đề gốc: Câu 16)",
    "a": [
      "Đổi tên biến",
      "Quản lý nhiều tài nguyên giống nhau có số lượng hữu hạn",
      "Chỉ bảo vệ một tài nguyên duy nhất",
      "Xóa tiến trình khỏi hàng đợi"
    ],
    "correct": 1,
    "why": "Counting semaphore dùng để quản lý số lượng hữu hạn tài nguyên giống nhau.; Binary semaphore chỉ có 0/1; semaphore cần thao tác nguyên tử.",
    "ref": "Trang 20",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q19",
    "q": "[C5_Q19] Semaphore không chờ bận thường dùng cơ chế nào? (Đề gốc: Câu 37)",
    "a": [
      "block() và wakeup()",
      "zoom() và rotate()",
      "paint() và draw()",
      "format() và delete()"
    ],
    "correct": 0,
    "why": "Semaphore không chờ bận dùng block() để ngủ và wakeup() để đánh thức.; Khác spinlock: spinlock lặp kiểm tra khóa và tiêu thụ CPU.",
    "ref": "Trang 21",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q20",
    "q": "[C5_Q20] Deadlock là gì? (Đề gốc: Câu 94)",
    "a": [
      "Bộ nhớ tự động mở rộng",
      "Tiến trình chờ lâu nhưng cuối cùng luôn được phục vụ ngay",
      "CPU chạy nhanh hơn bình thường",
      "Hai hay nhiều tiến trình chờ nhau vô hạn nên không tiến trình nào tiếp tục được"
    ],
    "correct": 3,
    "why": "Deadlock: nhóm tiến trình chờ nhau vô hạn, không thể tiếp tục.; Bốn điều kiện cần: mutual exclusion, hold-and-wait, no preemption, circular wait.",
    "ref": "Trang 21",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q21",
    "q": "[C5_Q21] Starvation khác deadlock ở điểm nào? (Đề gốc: Câu 74)",
    "a": [
      "Starvation không liên quan đến công bằng",
      "Starvation luôn làm toàn hệ thống dừng ngay",
      "Starvation chỉ xảy ra khi không có tiến trình",
      "Starvation là một tiến trình có thể bị chờ rất lâu vì luôn bị bỏ qua, không nhất thiết tất cả đều kẹt"
    ],
    "correct": 3,
    "why": "Starvation: tiến trình bị bỏ qua quá lâu; deadlock: các tiến trình chờ nhau không tiến triển.; Aging là một biện pháp giảm starvation.",
    "ref": "Trang 21",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q22",
    "q": "[C5_Q22] Bài toán Producer-Consumer cần đồng bộ những gì? (Đề gốc: Câu 64)",
    "a": [
      "Chỉ xóa consumer",
      "Chỉ tăng kích thước màn hình",
      "Chỉ đổi tên producer",
      "Loại trừ khi truy cập vùng đệm và đếm số ô trống/ô đầy"
    ],
    "correct": 3,
    "why": "Producer-Consumer: mutex bảo vệ buffer, empty đếm ô trống, full đếm ô đầy.; Producer chờ khi buffer đầy; consumer chờ khi buffer rỗng.",
    "ref": "Trang 21",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q23",
    "q": "[C5_Q23] Trong bài toán Readers-Writers, quy tắc cơ bản là gì? (Đề gốc: Câu 3)",
    "a": [
      "Reader không bao giờ được đọc",
      "Nhiều writer luôn ghi đồng thời không cần khóa",
      "Writer không bao giờ được ghi",
      "Nhiều reader có thể đọc đồng thời, nhưng writer cần quyền truy cập độc quyền"
    ],
    "correct": 3,
    "why": "Readers-Writers: nhiều reader có thể cùng đọc, writer phải độc quyền.; Thiết kế ưu tiên reader/writer không hợp lý có thể gây starvation.",
    "ref": "Trang 21",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q24",
    "q": "[C5_Q24] Trong Dining Philosophers, nguy cơ deadlock xảy ra khi nào? (Đề gốc: Câu 47) (Đề gốc: Câu 99)",
    "a": [
      "Không triết gia nào muốn ăn",
      "Tất cả đũa đều dư thừa vô hạn",
      "Mỗi triết gia giữ một chiếc đũa và chờ chiếc còn lại",
      "Chỉ có một triết gia trong hệ thống"
    ],
    "correct": 2,
    "why": "Dining Philosophers: mỗi người giữ một đũa và chờ đũa kia → circular wait.; Điều kiện deadlock: mutual exclusion, hold-and-wait, no preemption, circular wait.",
    "ref": "Trang 22",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "bank",
    "sourceName": "ACFrOgAIWUmNYKZ38hbMnmZ1tT-I6a9YitncBeCCwCEaNRngNKZ8iRHQsNdWlf8v7f9JoQbdwomfJXwZGtnvKplj4oORxGmGGkge4sBU95GV70SgfuBBazJh4uOZe4WaMqazBIzpgVBHcd_oHIdS.pdf",
    "code": "C5_Q25",
    "q": "[C5_Q25] Monitor khác semaphore ở điểm nổi bật nào? (Đề gốc: Câu 99)",
    "a": [
      "Monitor luôn là thiết bị phần cứng",
      "Monitor không hỗ trợ loại trừ hỗ tương",
      "Monitor đóng gói dữ liệu và thao tác, cung cấp mức trừu tượng cao hơn",
      "Monitor chỉ dùng để hiển thị hình ảnh"
    ],
    "correct": 2,
    "why": "Monitor đóng gói dữ liệu chia sẻ, thủ tục và cơ chế đồng bộ.; Condition variable thường dùng wait()/signal() trong monitor.",
    "ref": "Trang 22",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q13",
    "q": "[C3_Q13] Tiến trình zombie là tiến trình như thế nào?",
    "a": [
      "Đang chạy trên CPU mạnh nhất",
      "Chưa từng được tạo",
      "Đã kết thúc nhưng thông tin trạng thái chưa được tiến trình cha thu nhận",
      "Đang chờ bàn phím"
    ],
    "correct": 2,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Câu hỏi 1",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q19",
    "q": "[C3_Q19] IPC (Interprocess Communication) là gì?",
    "a": [
      "Một lệnh tắt máy",
      "Một loại ổ cứng",
      "Bộ nhớ đệm của màn hình",
      "Cơ chế giao tiếp giữa các tiến trình"
    ],
    "correct": 3,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Câu hỏi 2",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q01",
    "q": "[C2_Q01] Dịch vụ hệ điều hành là gì?",
    "a": [
      "Các tệp hình ảnh nền",
      "Các chức năng hệ điều hành cung cấp cho chương trình và người dùng",
      "Các dây cáp kết nối phần cứng",
      "Các phím tắt của trình duyệt"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Câu hỏi 3",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q04",
    "q": "[C2_Q04] Giao diện đồ họa (GUI) giúp người dùng làm gì?",
    "a": [
      "Thay thế hoàn toàn CPU",
      "Tương tác với hệ thống thông qua cửa sổ, biểu tượng, menu và con trỏ",
      "Xóa bỏ mọi tập tin hệ thống",
      "Tự động tăng RAM vật lý"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Câu hỏi 4",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q07",
    "q": "[C1_Q07] Chế độ nhân (kernel mode) có đặc điểm nào?",
    "a": [
      "Không được truy cập bộ nhớ",
      "Có quyền thực thi các lệnh đặc quyền và truy cập tài nguyên hệ thống",
      "Chỉ dùng để hiển thị hình nền",
      "Chỉ cho phép chạy trò chơi"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Câu hỏi 5",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q05",
    "q": "[C2_Q05] System call thuộc nhóm quản lý tiến trình thường dùng để làm gì?",
    "a": [
      "Tạo, kết thúc, chờ hoặc điều khiển tiến trình",
      "Xóa lịch sử trình duyệt",
      "Tạo hình nền động",
      "Thay đổi màu bàn phím"
    ],
    "correct": 0,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Câu hỏi 6",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q17",
    "q": "[C4_Q17] Aging dùng để làm gì?",
    "a": [
      "Giảm tốc độ CPU",
      "Tăng dần ưu tiên của tiến trình chờ lâu để giảm starvation",
      "Xóa hàng đợi sẵn sàng",
      "Tăng kích thước màn hình"
    ],
    "correct": 1,
    "why": "Đáp án xuất hiện trong hai PDF đề cùng mã câu.",
    "ref": "Câu hỏi 7",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q01",
    "q": "[C1_Q01] Vai trò chính của hệ điều hành là gì?",
    "a": [
      "Chỉ dùng để soạn thảo văn bản",
      "Chỉ dùng để thiết kế giao diện đồ họa",
      "Chỉ dùng để biên dịch chương trình",
      "Quản lý tài nguyên phần cứng và cung cấp môi trường thực thi cho chương trình"
    ],
    "correct": 3,
    "why": "Ý chính: Quản lý tài nguyên phần cứng và cung cấp môi trường thực thi cho chương trình.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Câu hỏi 8",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q15",
    "q": "[C5_Q15] Semaphore là gì?",
    "a": [
      "Công cụ đồng bộ hóa dựa trên một biến nguyên và các thao tác nguyên tử",
      "Một loại màn hình cảm ứng",
      "Một trình duyệt web",
      "Một định dạng tập tin ảnh"
    ],
    "correct": 0,
    "why": "Semaphore là biến đếm được thao tác nguyên tử bằng wait() và signal().; Binary semaphore: 0/1; counting semaphore: quản lý nhiều đơn vị tài nguyên.",
    "ref": "Câu hỏi 9",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q10",
    "q": "[C5_Q10] Hạn chế thường gặp của các giải pháp phần mềm đồng bộ là gì?",
    "a": [
      "Có thể gây chờ bận và khó mở rộng",
      "Không thể minh họa bằng thuật toán",
      "Không cần biến chia sẻ",
      "Luôn loại bỏ mọi lỗi lập trình"
    ],
    "correct": 0,
    "why": "Busy waiting = lặp kiểm tra liên tục, gây tốn CPU.; Peterson áp dụng kinh điển cho 2 tiến trình; spinlock sử dụng chờ bận.",
    "ref": "Câu hỏi 10",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q11",
    "q": "[C4_Q11] Khó khăn chính khi áp dụng SJF/SRTF trong thực tế là gì?",
    "a": [
      "Khó biết chính xác CPU burst tiếp theo",
      "Không cần bộ định thời",
      "Không thể tính thời gian chờ",
      "Không có hàng đợi sẵn sàng"
    ],
    "correct": 0,
    "why": "SJF/SRTF khó biết trước CPU burst; có thể dự đoán bằng exponential averaging.; SJF không trưng dụng; SRTF có trưng dụng và có thể gây starvation.",
    "ref": "Câu hỏi 11",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q02",
    "q": "[C1_Q02] Hệ điều hành đóng vai trò trung gian giữa các đối tượng nào?",
    "a": [
      "Bộ nhớ ngoài và bàn phím",
      "Người dùng/chương trình ứ",
      "Trình duyệt web và máy in",
      "Tập tin và thư mục"
    ],
    "correct": null,
    "why": "Không đủ dữ liệu để xác minh.",
    "ref": "Câu hỏi 12",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q10",
    "q": "[C2_Q10] Microkernel có xu hướng thiết kế như thế nào?",
    "a": [
      "Không cho phép quản lý tiến trình",
      "Giữ kernel nhỏ, chuyển nhiều dịch vụ ra không gian người dùng",
      "Đưa toàn bộ ứng dụng văn phòng vào kernel",
      "Loại bỏ cơ chế truyền thông"
    ],
    "correct": 1,
    "why": "Microkernel giữ nhân nhỏ, dịch vụ chuyển ra user space.; Ưu: dễ bảo trì/cô lập lỗi; nhược: tăng chi phí IPC.",
    "ref": "Câu hỏi 13",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q11",
    "q": "[C3_Q11] exec() thường dùng để làm gì?",
    "a": [
      "Tạo bản sao ổ cứng",
      "Tạo giao diện đồ họa",
      "Thay thế chương trình đang chạy trong tiến trình bằng chương trình khác",
      "Tắt CPU"
    ],
    "correct": 2,
    "why": "exec() thay thế ảnh chương trình trong tiến trình hiện tại, không tạo PID mới.; fork() tạo tiến trình con; wait() chờ con kết thúc.",
    "ref": "Câu hỏi 14",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q08",
    "q": "[C3_Q08] Chuyển ngữ cảnh quá nhiều có thể gây hậu quả gì?",
    "a": [
      "Làm CPU biến mất",
      "Tăng dung lượng ổ cứng vật lý",
      "Làm chương trình không cần bộ nhớ",
      "Tăng overhead và làm giảm hiệu năng hệ thống"
    ],
    "correct": 3,
    "why": "Context switch lưu/phục hồi trạng thái tiến trình, tạo overhead.; Chuyển ngữ cảnh quá thường xuyên làm giảm thời gian CPU xử lý công việc hữu ích.",
    "ref": "Câu hỏi 15",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q10",
    "q": "[C4_Q10] SRTF là phiên bản nào của SJF?",
    "a": [
      "Không trưng dụng, chọn tiến trình dài nhất",
      "Chỉ chọn tiến trình ưu tiên thấp",
      "Chỉ dùng cho hệ thống tập tin",
      "Có trưng dụng, chọn tiến trình có thời gian còn lại ngắn nhất"
    ],
    "correct": 3,
    "why": "SRTF = Shortest Remaining Time First, phiên bản SJF có trưng dụng.; Tiến trình mới có thời gian còn lại ngắn hơn có thể giành CPU.",
    "ref": "Câu hỏi 16",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q07",
    "q": "[C3_Q07] Chuyển ngữ cảnh (context switch) là gì?",
    "a": [
      "Tắt màn hình",
      "Sao chép tập tin sang USB",
      "Lưu trạng thái tiến trình hiện tại và nạp trạng thái tiến trình khác",
      "Đổi màu giao diện hệ điều hành"
    ],
    "correct": 2,
    "why": "Context switch: lưu trạng thái tiến trình cũ, nạp trạng thái tiến trình mới.; PCB lưu thông tin cần thiết để tiếp tục thực thi.",
    "ref": "Câu hỏi 17",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q07",
    "q": "[C2_Q07] API khác system call trực tiếp ở điểm nào?",
    "a": [
      "API không liên quan đến phần mềm",
      "API cung cấp giao diện lập trình thuận tiện hơn, thường gọi system call bên dưới",
      "API chỉ là bộ nhớ vật lý",
      "API luôn là phần cứng"
    ],
    "correct": 1,
    "why": "API cung cấp hàm tiện dụng; không phải mọi lời gọi API đều sinh system call.; System call chuyển vào kernel để yêu cầu dịch vụ được bảo vệ.",
    "ref": "Câu hỏi 18",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q09",
    "q": "[C1_Q09] Trong hệ điều hành, quản lý bộ nhớ nhằm mục tiêu nào?",
    "a": [
      "Chỉ điều khiển âm thanh",
      "Cấp phát, thu hồi, bảo vệ và tổ chức bộ nhớ cho các tiến trình",
      "Chỉ đổi màu giao diện",
      "Chỉ tăng tốc độ mạng"
    ],
    "correct": 1,
    "why": "Ý chính: Cấp phát, thu hồi, bảo vệ và tổ chức bộ nhớ cho các tiến trình.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Câu hỏi 19",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q14",
    "q": "[C1_Q14] Container khác máy ảo truyền thống ở điểm nào?",
    "a": [
      "Không liên quan đến hệ điều hành",
      "Không thể chạy ứng dụng",
      "Thường chia sẻ kernel của hệ điều hành chủ nên nhẹ hơn máy ảo đầy đủ",
      "Luôn cần một CPU vật lý riêng"
    ],
    "correct": 2,
    "why": "Container thường chia sẻ kernel máy chủ; VM có hệ điều hành khách riêng.; Container nhẹ/khởi động nhanh; VM cô lập ở mức máy ảo.",
    "ref": "Câu hỏi 20",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q07",
    "q": "[C5_Q07] Yêu cầu chờ đợi hữu hạn (bounded waiting) nhằm tránh điều gì?",
    "a": [
      "Tăng dung lượng RAM",
      "Xóa dữ liệu dùng chung",
      "Starvation",
      "Tăng tốc CPU"
    ],
    "correct": 2,
    "why": "Bounded waiting: giới hạn số lần tiến trình khác vượt lên trước.; Giúp ngăn starvation; khác progress và mutual exclusion.",
    "ref": "Câu hỏi 21",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q13",
    "q": "[C4_Q13] Trong Round Robin, quantum là gì?",
    "a": [
      "Số lượng tập tin trong thư mục",
      "Dung lượng ổ cứng",
      "Khoảng thời gian tối đa một tiến trình được giữ CPU mỗi lượt",
      "Kích thước màn hình"
    ],
    "correct": 2,
    "why": "Time quantum: thời lượng CPU tối đa mỗi lượt trong Round Robin.; Quantum nhỏ: nhiều context switch; quá lớn: RR gần FCFS.",
    "ref": "Câu hỏi 22",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q17",
    "q": "[C5_Q17] Binary semaphore thường có giá trị nào?",
    "a": [
      "Bất kỳ chuỗi ký tự nào",
      "Luôn bằng 100",
      "Chỉ số âm",
      "0 hoặc 1"
    ],
    "correct": 3,
    "why": "Binary semaphore có hai trạng thái logic 0 và 1.; Counting semaphore đếm nhiều tài nguyên; wait giảm, signal tăng theo ngữ nghĩa semaphore.",
    "ref": "Câu hỏi 23",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q15",
    "q": "[C2_Q15] Khi thiết kế hệ điều hành, yếu tố nào cần cân bằng?",
    "a": [
      "Chỉ số lượng biểu tượng",
      "Chỉ tên thư mục",
      "Chỉ màu sắc giao diện",
      "Hiệu năng, an toàn, dễ mở rộng và dễ bảo trì"
    ],
    "correct": 3,
    "why": "Ý chính: Hiệu năng, an toàn, dễ mở rộng và dễ bảo trì.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Câu hỏi 24",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q21",
    "q": "[C5_Q21] Starvation khác deadlock ở điểm nào?",
    "a": [
      "Starvation không liên quan đến công bằng",
      "Starvation luôn làm toàn hệ thống dừng ngay",
      "Starvation là một tiến trình có thể bị chờ rất lâu vì luôn bị bỏ qua, không nhất thiết tất cả đều kẹt",
      "Starvation chỉ xảy ra khi không có tiến trình"
    ],
    "correct": 2,
    "why": "Starvation: tiến trình bị bỏ qua quá lâu; deadlock: các tiến trình chờ nhau không tiến triển.; Aging là một biện pháp giảm starvation.",
    "ref": "Câu hỏi 25",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q03",
    "q": "[C2_Q03] Giao diện dòng lệnh (CLI) có đặc điểm nào?",
    "a": [
      "Luôn cần màn hình cảm ứng",
      "Không cho phép chạy chương trình",
      "Chỉ thao tác bằng cảm biến vân tay",
      "Người dùng nhập lệnh dạng văn bản để yêu cầu hệ thống thực hiện công việc"
    ],
    "correct": 3,
    "why": "Ý chính: Người dùng nhập lệnh dạng văn bản để yêu cầu hệ thống thực hiện công việc.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Câu hỏi 26",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q03",
    "q": "[C4_Q03] Dispatch là gì trong định thời CPU?",
    "a": [
      "Chuyển CPU cho tiến trình được chọn thực thi",
      "Đổi tên thư mục",
      "Tăng dung lượng RAM",
      "Xóa một tiến trình khỏi ổ đĩa"
    ],
    "correct": 0,
    "why": "Ý chính: Chuyển CPU cho tiến trình được chọn thực thi.; Waiting time: thời gian chờ ready; turnaround = hoàn thành − đến; response = chạy lần đầu − đến.",
    "ref": "Câu hỏi 27",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q06",
    "q": "[C3_Q06] Trạng thái Waiting/Blocked thường xảy ra khi nào?",
    "a": [
      "Tiến trình đã hoàn tất mọi công việc",
      "Tiến trình đang chiếm CPU",
      "Tiến trình chờ I/O hoặc chờ một sự kiện",
      "Tiến trình không tồn tại"
    ],
    "correct": 2,
    "why": "Ý chính: Tiến trình chờ I/O hoặc chờ một sự kiện.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Câu hỏi 28",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q04",
    "q": "[C1_Q04] Thành phần nào là phần lõi của hệ điều hành, thường chạy ở chế độ nhân?",
    "a": [
      "Trình duyệt",
      "Ứng dụng người dùng",
      "Kernel",
      "Trình soạn thảo văn bản"
    ],
    "correct": 2,
    "why": "Ý chính: Kernel.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Câu hỏi 29",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q13",
    "q": "[C1_Q13] Máy ảo (virtual machine) giúp ích gì?",
    "a": [
      "Thay thế mọi ứng dụng văn phòng",
      "Làm mất hoàn toàn nhu cầu dùng CPU",
      "Xóa bỏ cơ chế bảo vệ hệ thống",
      "Cho phép chạy nhiều môi trường hệ điều hành độc lập trên cùng phần cứng"
    ],
    "correct": 3,
    "why": "Ý chính: Cho phép chạy nhiều môi trường hệ điều hành độc lập trên cùng phần cứng.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Câu hỏi 30",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q18",
    "q": "[C4_Q18] MLFQ là gì?",
    "a": [
      "Một lệnh tắt tiến trình",
      "Một loại bộ nhớ ngoài",
      "Một giao diện đồ họa",
      "Định thời dùng nhiều hàng đợi phản hồi với mức ưu tiên khác nhau"
    ],
    "correct": 3,
    "why": "MLFQ = Multilevel Feedback Queue: nhiều hàng đợi ưu tiên, cho phép thay đổi mức.; Ưu tiên được điều chỉnh theo hành vi sử dụng CPU/I/O.",
    "ref": "Câu hỏi 31",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q24",
    "q": "[C4_Q24] EDF (Earliest Deadline First) chọn công việc nào trước?",
    "a": [
      "Công việc có tên dài nhất",
      "Công việc có thời hạn gần nhất",
      "Công việc có PID lớn nhất",
      "Công việc có thời hạn xa nhất"
    ],
    "correct": 1,
    "why": "EDF = Earliest Deadline First: deadline gần nhất được ưu tiên.; Hard real-time yêu cầu đáp ứng hạn chót nghiêm ngặt.",
    "ref": "Câu hỏi 32",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q08",
    "q": "[C4_Q08] Nhược điểm nổi bật của FCFS là gì?",
    "a": [
      "Có thể gây hiệu ứng đoàn tàu (convoy effect)",
      "Không thể chạy tiến trình nào",
      "Luôn gây deadlock",
      "Luôn cần biết burst time tương lai"
    ],
    "correct": 0,
    "why": "FCFS có convoy effect: tiến trình ngắn chờ sau tiến trình dài.; FCFS không trưng dụng, đơn giản nhưng thời gian chờ có thể cao.",
    "ref": "Câu hỏi 33",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q12",
    "q": "[C5_Q12] Disable interrupt bảo vệ miền tương trục bằng cách nào?",
    "a": [
      "Tăng dung lượng ổ đĩa",
      "Xóa tài nguyên dùng chung",
      "Tạo thêm nhiều tiến trình",
      "Tạm thời vô hiệu hóa ngắt để tránh bị gián đoạn trong đoạn mã cần bảo vệ"
    ],
    "correct": 3,
    "why": "Disable interrupts tránh bị ngắt trên CPU đang chạy trong đoạn mã bảo vệ.; Không đủ bảo vệ giữa nhiều CPU và không nên tắt ngắt quá lâu.",
    "ref": "Câu hỏi 34",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q06",
    "q": "[C4_Q06] Thời gian đáp ứng (response time) là gì?",
    "a": [
      "Thời gian từ khi tiến trình đến đến khi được CPU phục vụ lần đầu",
      "Thời gian từ khi máy tính bật đến khi tắt",
      "Thời gian cài đặt hệ điều hành",
      "Thời gian sao chép tập tin"
    ],
    "correct": null,
    "why": "Không đủ dữ liệu để xác minh.",
    "ref": "Câu hỏi 35",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q02",
    "q": "[C3_Q02] Điểm khác nhau cơ bản giữa chương trình và tiến trình là gì?",
    "a": [
      "Chương trình là mã tĩnh, tiến trình là chương trình đang thực thi",
      "Chương trình là phần cứng, tiến trình là dây cáp",
      "Chương trình luôn chạy, tiến trình luôn tắt",
      "Không có khác biệt nào"
    ],
    "correct": 0,
    "why": "Ý chính: Chương trình là mã tĩnh, tiến trình là chương trình đang thực thi.; Ready chờ CPU; Running đang chạy; Blocked chờ sự kiện/I/O.",
    "ref": "Câu hỏi 36",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q13",
    "q": "[C5_Q13] Test-and-Set là loại thao tác gì?",
    "a": [
      "Thao tác đổi tên thư mục",
      "Thao tác nguyên tử dùng để kiểm tra và đặt khóa",
      "Thao tác sao chép hình ảnh",
      "Thao tác tắt màn hình"
    ],
    "correct": 1,
    "why": "Test-and-Set là thao tác nguyên tử đọc giá trị cũ và đặt giá trị mới.; Dùng xây dựng spinlock; có thể gây busy waiting.",
    "ref": "Câu hỏi 37",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q23",
    "q": "[C4_Q23] Định thời thời gian thực hard real-time yêu cầu điều gì?",
    "a": [
      "Có thể trễ tùy ý",
      "Chỉ cần giao diện đẹp",
      "Phải đáp ứng đúng hạn chặt chẽ",
      "Không cần deadline"
    ],
    "correct": 2,
    "why": "Hard real-time: trễ deadline có thể là lỗi hệ thống nghiêm trọng.; Soft real-time: trễ deadline làm giảm chất lượng nhưng không nhất thiết thất bại.",
    "ref": "Câu hỏi 38",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q24",
    "q": "[C5_Q24] Trong Dining Philosophers, nguy cơ deadlock xảy ra khi nào?",
    "a": [
      "Mỗi triết gia giữ một chiếc đũa và chờ chiếc còn lại",
      "Chỉ có một triết gia trong hệ thống",
      "Không triết gia nào muốn ăn",
      "Tất cả đũa đều dư thừa vô hạn"
    ],
    "correct": 0,
    "why": "Dining Philosophers: mỗi người giữ một đũa và chờ đũa kia → circular wait.; Điều kiện deadlock: mutual exclusion, hold-and-wait, no preemption, circular wait.",
    "ref": "Câu hỏi 39",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q05",
    "q": "[C3_Q05] Trạng thái Running của tiến trình có nghĩa là gì?",
    "a": [
      "Tiến trình chưa được nạp vào bộ nhớ",
      "Tiến trình đang được CPU thực thi",
      "Tiến trình đang nằm trong ổ đĩa ngoài",
      "Tiến trình đã bị xóa"
    ],
    "correct": 1,
    "why": "Ý chính: Tiến trình đang được CPU thực thi.; Ready chờ CPU; Running đang chạy; Blocked chờ sự kiện/I/O.",
    "ref": "Câu hỏi 40",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q03",
    "q": "[C1_Q03] Mục tiêu quan trọng của hệ điều hành là gì?",
    "a": [
      "Thay thế tất cả phần mềm ứng dụng",
      "Loại bỏ hoàn toàn nhu cầu dùng phần cứng",
      "Chỉ tăng dung lượng ổ đĩa",
      "Sử dụng tài nguyên hiệu quả và tạo môi trường thuận tiện cho người dùng"
    ],
    "correct": 3,
    "why": "Ý chính: Sử dụng tài nguyên hiệu quả và tạo môi trường thuận tiện cho người dùng.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Câu hỏi 41",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q05",
    "q": "[C5_Q05] Yêu cầu loại trừ hỗ tương (mutual exclusion) nghĩa là gì?",
    "a": [
      "Không tiến trình nào được chạy",
      "Tất cả tiến trình phải cùng vào miền tương trục",
      "Mọi tiến trình phải kết thúc cùng lúc",
      "Tại một thời điểm, chỉ một tiến trình được vào miền tương trục"
    ],
    "correct": 3,
    "why": "Ý chính: Tại một thời điểm, chỉ một tiến trình được vào miền tương trục.; Ba yêu cầu: mutual exclusion, progress, bounded waiting.",
    "ref": "Câu hỏi 42",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q11",
    "q": "[C2_Q11] Ưu điểm thường gặp của microkernel là gì?",
    "a": [
      "Luôn nhanh hơn mọi kernel khác trong mọi trường hợp",
      "Dễ mở rộng, dễ bảo trì và tăng tính cô lập lỗi",
      "Không cần truyền thông giữa thành phần",
      "Không cần bộ nhớ"
    ],
    "correct": 1,
    "why": "Ý chính: Dễ mở rộng, dễ bảo trì và tăng tính cô lập lỗi.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Câu hỏi 43",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q01",
    "q": "[C4_Q01] Định thời CPU là gì?",
    "a": [
      "Chọn tên tập tin để lưu",
      "Chọn tiến trình trong hàng đợi sẵn sàng để cấp CPU thực thi",
      "Chọn thiết bị âm thanh mặc định",
      "Chọn màu sắc giao diện hệ thống"
    ],
    "correct": 1,
    "why": "Ý chính: Chọn tiến trình trong hàng đợi sẵn sàng để cấp CPU thực thi.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Câu hỏi 44",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q01",
    "q": "[C5_Q01] Đồng bộ hóa tiến trình cần thiết khi nào?",
    "a": [
      "Khi nhiều tiến trình/luồng cùng truy cập tài nguyên hoặc dữ liệu dùng chung",
      "Khi hệ thống không có bộ nhớ",
      "Khi chỉ có một tiến trình duy nhất và không có dữ liệu chia sẻ",
      "Khi không có CPU"
    ],
    "correct": 0,
    "why": "Ý chính: Khi nhiều tiến trình/luồng cùng truy cập tài nguyên hoặc dữ liệu dùng chung.; Critical section: đoạn mã truy cập dữ liệu chung; race condition do thứ tự thực thi xen kẽ.",
    "ref": "Câu hỏi 45",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q04",
    "q": "[C3_Q04] Trạng thái Ready của tiến trình có nghĩa là gì?",
    "a": [
      "Tiến trình chưa được tạo",
      "Tiến trình đang chờ I/O",
      "Tiến trình đã sẵn sàng chạy và đang chờ CPU",
      "Tiến trình đã kết thúc hoàn toàn"
    ],
    "correct": 2,
    "why": "Ý chính: Tiến trình đã sẵn sàng chạy và đang chờ CPU.; Process = chương trình đang thực thi; PCB lưu PID, trạng thái, thanh ghi, bộ đếm lệnh.",
    "ref": "Câu hỏi 46",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q09",
    "q": "[C5_Q09] Bakery Algorithm dùng ý tưởng nào?",
    "a": [
      "Mỗi tiến trình lấy số thứ tự, số nhỏ hơn được ưu tiên vào trước",
      "Tiến trình vào ngẫu nhiên không kiểm soát",
      "Tiến trình dùng nhiều RAM nhất vào trước",
      "Tiến trình có tên dài nhất vào trước"
    ],
    "correct": 0,
    "why": "Bakery Algorithm cấp số thứ tự (ticket) để quyết định lượt vào vùng tới hạn.; Nếu số bằng nhau, dùng PID để phân xử; là giải pháp phần mềm loại trừ tương hỗ.",
    "ref": "Câu hỏi 47",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q06",
    "q": "[C1_Q06] Vì sao cần phân biệt chế độ người dùng và chế độ nhân?",
    "a": [
      "Để xóa bỏ hoàn toàn quyền truy cập bộ nhớ",
      "Để bảo vệ hệ thống, ngăn chương trình người dùng truy cập trực tiếp tài nguyên nhạy cảm",
      "Để tăng kích thước màn hình",
      "Để làm cho mọi chương trình chạy chậm hơn"
    ],
    "correct": 1,
    "why": "Ý chính: Để bảo vệ hệ thống, ngăn chương trình người dùng truy cập trực tiếp tài nguyên nhạy cảm.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Câu hỏi 48",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q08",
    "q": "[C5_Q08] Peterson là giải pháp phần mềm kinh điển cho trường hợp nào?",
    "a": [
      "Hàng triệu tiến trình không cần biến chia sẻ",
      "Định thời đĩa",
      "Hai tiến trình tranh chấp miền tương trục",
      "Quản lý tập tin ảnh"
    ],
    "correct": 2,
    "why": "Peterson: thuật toán phần mềm cổ điển cho hai tiến trình.; Dùng flag[] và turn; có busy waiting.",
    "ref": "Câu hỏi 49",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q12",
    "q": "[C3_Q12] wait() thường được tiến trình cha dùng để làm gì?",
    "a": [
      "Tăng tốc độ mạng",
      "Chờ tiến trình con kết thúc và thu nhận trạng thái kết thúc",
      "Đổi mật khẩu hệ thống",
      "Tạo tập tin tạm"
    ],
    "correct": 1,
    "why": "Ý chính: Chờ tiến trình con kết thúc và thu nhận trạng thái kết thúc.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Câu hỏi 50",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q09",
    "q": "[C3_Q09] Trong Linux/Unix, fork() thường dùng để làm gì?",
    "a": [
      "Đổi tên máy tính",
      "Xóa toàn bộ hệ điều hành",
      "Tạo một tiến trình con từ tiến trình hiện tại",
      "Thay đổi độ phân giải màn hình"
    ],
    "correct": 2,
    "why": "Ý chính: Tạo một tiến trình con từ tiến trình hiện tại.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Câu hỏi 51",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q03",
    "q": "[C5_Q03] Hậu quả của race condition có thể là gì?",
    "a": [
      "Tăng dung lượng ổ cứng",
      "Tăng độ phân giải màn hình",
      "Giảm số lượng tiến trình về 0",
      "Dữ liệu sai lệch hoặc không nhất quán"
    ],
    "correct": 3,
    "why": "Ý chính: Dữ liệu sai lệch hoặc không nhất quán.; Semaphore: wait()/signal(); mutex bảo vệ vùng tới hạn; busy waiting tiêu tốn CPU.",
    "ref": "Câu hỏi 52",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q03",
    "q": "[C3_Q03] PCB (Process Control Block) dùng để làm gì?",
    "a": [
      "Lưu hình nền hệ thống",
      "Lưu tốc độ quạt máy tính",
      "Lưu thông tin quản lý tiến trình như trạng thái, thanh ghi, bộ đếm chương trình",
      "Lưu danh sách phím tắt trình duyệt"
    ],
    "correct": 2,
    "why": "Ý chính: Lưu thông tin quản lý tiến trình như trạng thái, thanh ghi, bộ đếm chương trình.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Câu hỏi 53",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q20",
    "q": "[C3_Q20] Shared memory trong IPC có ưu điểm nào?",
    "a": [
      "Không cần đồng bộ hóa trong mọi trường hợp",
      "Trao đổi dữ liệu nhanh vì các tiến trình cùng truy cập vùng nhớ chung",
      "Không cần hệ điều hành cấp phát",
      "Chỉ dùng được cho một tiến trình"
    ],
    "correct": 1,
    "why": "Shared memory: nhiều tiến trình cùng truy cập vùng nhớ, trao đổi nhanh.; Cần đồng bộ khi ghi/đọc đồng thời để tránh race condition.",
    "ref": "Câu hỏi 54",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q08",
    "q": "[C1_Q08] Hệ điều hành đa nhiệm có ý nghĩa gì?",
    "a": [
      "Không cần thiết bị vào/ra",
      "Không cần bộ nhớ chính",
      "Cho phép nhiều tiến trình/chương trình cùng được quản lý và chia sẻ CPU",
      "Chỉ cho phép một chương trình chạy duy nhất"
    ],
    "correct": 2,
    "why": "Ý chính: Cho phép nhiều tiến trình/chương trình cùng được quản lý và chia sẻ CPU.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Câu hỏi 55",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q19",
    "q": "[C5_Q19] Semaphore không chờ bận thường dùng cơ chế nào?",
    "a": [
      "block() và wakeup()",
      "format() và delete()",
      "paint() và draw()",
      "zoom() và rotate()"
    ],
    "correct": 0,
    "why": "Semaphore không chờ bận dùng block() để ngủ và wakeup() để đánh thức.; Khác spinlock: spinlock lặp kiểm tra khóa và tiêu thụ CPU.",
    "ref": "Câu hỏi 56",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q10",
    "q": "[C1_Q10] Quản lý tập tin của hệ điều hành bao gồm công việc nào?",
    "a": [
      "Chỉ tính toán lịch CPU",
      "Chỉ thay đổi độ sáng màn hình",
      "Chỉ quản lý chuột",
      "Tạo, xóa, đọc, ghi và tổ chức tập tin/thư mục"
    ],
    "correct": 3,
    "why": "Ý chính: Tạo, xóa, đọc, ghi và tổ chức tập tin/thư mục.; OS quản lý CPU, bộ nhớ, I/O, tệp và cung cấp môi trường chạy chương trình.",
    "ref": "Câu hỏi 57",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q11",
    "q": "[C5_Q11] Chờ bận (busy waiting) là gì?",
    "a": [
      "Tiến trình liên tục kiểm tra điều kiện trong khi chờ",
      "Tiến trình đã kết thúc",
      "Tiến trình không tồn tại trong bộ nhớ",
      "Tiến trình ngủ và không chiếm CPU"
    ],
    "correct": 0,
    "why": "Ý chính: Tiến trình liên tục kiểm tra điều kiện trong khi chờ.; Ba yêu cầu: mutual exclusion, progress, bounded waiting.",
    "ref": "Câu hỏi 58",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q15",
    "q": "[C4_Q15] Priority Scheduling chọn tiến trình dựa trên gì?",
    "a": [
      "Kích thước biểu tượng",
      "Mức ưu tiên của tiến trình",
      "Số lượng tập tin trong máy",
      "Tên tiến trình theo thứ tự chữ cái"
    ],
    "correct": 1,
    "why": "Ý chính: Mức ưu tiên của tiến trình.; Waiting time: thời gian chờ ready; turnaround = hoàn thành − đến; response = chạy lần đầu − đến.",
    "ref": "Câu hỏi 59",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q25",
    "q": "[C4_Q25] Khi đánh giá thuật toán định thời, nhận định nào đúng nhất?",
    "a": [
      "Round Robin không cần quantum",
      "FCFS luôn tốt nhất trong mọi trường hợp",
      "Không có thuật toán tối ưu cho mọi mục tiêu và mọi hệ thống",
      "SJF không cần biết burst time"
    ],
    "correct": 2,
    "why": "Ý chính: Không có thuật toán tối ưu cho mọi mục tiêu và mọi hệ thống.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Câu hỏi 60",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q04",
    "q": "[C4_Q04] Thời gian chờ (waiting time) là gì?",
    "a": [
      "Thời gian tắt màn hình",
      "Thời gian tiến trình dùng thiết bị mạng",
      "Tổng thời gian tiến trình chờ trong hàng đợi sẵn sàng",
      "Thời gian hệ thống khởi động BIOS"
    ],
    "correct": 2,
    "why": "Ý chính: Tổng thời gian tiến trình chờ trong hàng đợi sẵn sàng.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Câu hỏi 61",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q08",
    "q": "[C2_Q08] Vì sao chương trình ứng dụng thường không gọi trực tiếp lệnh phần cứng?",
    "a": [
      "Vì không tồn tại system call",
      "Vì phần cứng không cần bảo vệ",
      "Vì cần hệ điều hành kiểm soát an toàn và chia sẻ tài nguyên",
      "Vì mọi ứng dụng đều chạy ở chế độ nhân"
    ],
    "correct": 2,
    "why": "Ý chính: Vì cần hệ điều hành kiểm soát an toàn và chia sẻ tài nguyên.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Câu hỏi 62",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q14",
    "q": "[C5_Q14] Compare-and-Swap hoạt động theo ý tưởng nào?",
    "a": [
      "Chuyển tiến trình sang trạng thái zombie",
      "So sánh giá trị hiện tại với giá trị kỳ vọng, nếu khớp thì cập nhật giá trị mới",
      "Tắt mọi ngắt vĩnh viễn",
      "So sánh hai hình nền"
    ],
    "correct": 1,
    "why": "Compare-and-Swap (CAS): nếu giá trị hiện tại bằng kỳ vọng thì thay bằng giá trị mới.; CAS là thao tác nguyên tử, dùng trong đồng bộ không khóa hoặc xây dựng khóa.",
    "ref": "Câu hỏi 63",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q06",
    "q": "[C5_Q06] Yêu cầu tiến triển (progress) trong bài toán miền tương trục nghĩa là gì?",
    "a": [
      "Nếu miền tương trục đang rỗng và có tiến trình muốn vào, việc lựa chọn không bị trì hoãn vô hạn",
      "Tiến trình không được truy cập dữ liệu",
      "CPU phải luôn tắt khi có tranh chấp",
      "Tiến trình luôn phải chạy theo FIFO"
    ],
    "correct": 0,
    "why": "Ý chính: Nếu miền tương trục đang rỗng và có tiến trình muốn vào, việc lựa chọn không bị trì hoãn vô hạn.; Semaphore: wait()/signal(); mutex bảo vệ vùng tới hạn; busy waiting tiêu tốn CPU.",
    "ref": "Câu hỏi 64",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q16",
    "q": "[C5_Q16] Hai thao tác cơ bản của semaphore là gì?",
    "a": [
      "start() và shutdown()",
      "wait() và signal()",
      "read() và print()",
      "open() và close()"
    ],
    "correct": 1,
    "why": "Ý chính: wait() và signal().; Critical section: đoạn mã truy cập dữ liệu chung; race condition do thứ tự thực thi xen kẽ.",
    "ref": "Câu hỏi 65",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q01",
    "q": "[C3_Q01] Tiến trình là gì?",
    "a": [
      "Một tập tin ảnh trên đĩa",
      "Một phím tắt trên màn hình",
      "Một thiết bị phần cứng",
      "Một chương trình đang được thực thi"
    ],
    "correct": 3,
    "why": "Ý chính: Một chương trình đang được thực thi.; Process = chương trình đang thực thi; PCB lưu PID, trạng thái, thanh ghi, bộ đếm lệnh.",
    "ref": "Câu hỏi 66",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q25",
    "q": "[C5_Q25] Monitor khác semaphore ở điểm nổi bật nào?",
    "a": [
      "Monitor luôn là thiết bị phần cứng",
      "Monitor chỉ dùng để hiển thị hình ảnh",
      "Monitor đóng gói dữ liệu và thao tác, cung cấp mức trừu tượng cao hơn",
      "Monitor không hỗ trợ loại trừ hỗ tương"
    ],
    "correct": 2,
    "why": "Monitor đóng gói dữ liệu chia sẻ, thủ tục và cơ chế đồng bộ.; Condition variable thường dùng wait()/signal() trong monitor.",
    "ref": "Câu hỏi 67",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q12",
    "q": "[C2_Q12] Nhược điểm có thể gặp của microkernel là gì?",
    "a": [
      "Không thể bảo vệ hệ thống",
      "Chi phí truyền thông giữa các thành phần có thể cao hơn",
      "Không thể chạy ứng dụng",
      "Không hỗ trợ bộ nhớ"
    ],
    "correct": 1,
    "why": "Ý chính: Chi phí truyền thông giữa các thành phần có thể cao hơn.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Câu hỏi 68",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q12",
    "q": "[C4_Q12] Round Robin phù hợp với loại hệ thống nào?",
    "a": [
      "Hệ không có tiến trình",
      "Hệ tương tác và chia sẻ thời gian",
      "Hệ chỉ xử lý một chương trình duy nhất",
      "Hệ không có CPU"
    ],
    "correct": 1,
    "why": "Round Robin thích hợp hệ tương tác/time-sharing vì luân phiên cấp CPU.; Quantum ảnh hưởng độ đáp ứng và chi phí chuyển ngữ cảnh.",
    "ref": "Câu hỏi 69",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q14",
    "q": "[C2_Q14] Trình điều khiển thiết bị (device driver) có vai trò gì?",
    "a": [
      "Chỉ dùng để lưu mật khẩu",
      "Chỉ để thay đổi hình nền",
      "Giúp hệ điều hành giao tiếp và điều khiển thiết bị phần cứng",
      "Chỉ tạo tài khoản người dùng"
    ],
    "correct": 2,
    "why": "Ý chính: Giúp hệ điều hành giao tiếp và điều khiển thiết bị phần cứng.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Câu hỏi 70",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q10",
    "q": "[C3_Q10] Sau fork(), tiến trình cha và tiến trình con có đặc điểm nào?",
    "a": [
      "Cùng tiếp tục thực thi từ sau lời gọi fork(), nhưng có PID khác nhau",
      "Chỉ tiến trình cha được tiếp tục",
      "Cả hai đều bị xóa ngay",
      "Chỉ tiến trình con được tiếp tục"
    ],
    "correct": 0,
    "why": "Ý chính: Cùng tiếp tục thực thi từ sau lời gọi fork(), nhưng có PID khác nhau.; Process = chương trình đang thực thi; PCB lưu PID, trạng thái, thanh ghi, bộ đếm lệnh.",
    "ref": "Câu hỏi 71",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q12",
    "q": "[C1_Q12] Hệ điều hành thời gian thực cần chú trọng nhất yêu cầu nào?",
    "a": [
      "Chạy càng nhiều trình duyệt càng tốt",
      "Tạo nhiều biểu tượng màn hình",
      "Có nhiều hình nền",
      "Đáp ứng đúng thời hạn"
    ],
    "correct": 3,
    "why": "Ý chính: Đáp ứng đúng thời hạn.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Câu hỏi 72",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q05",
    "q": "[C4_Q05] Thời gian quay vòng (turnaround time) được tính như thế nào?",
    "a": [
      "Thời điểm đến trừ thời điểm hoàn thành",
      "Thời gian chờ trừ burst time",
      "Burst time trừ thời điểm đến",
      "Thời điểm hoàn thành trừ thời điểm đến"
    ],
    "correct": 3,
    "why": "Turnaround time = completion time − arrival time.; Waiting time = turnaround − tổng CPU burst (trong bài toán chỉ có CPU burst).",
    "ref": "Câu hỏi 73",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q19",
    "q": "[C4_Q19] Ý tưởng chính của MLFQ là gì?",
    "a": [
      "Không dùng hàng đợi",
      "Điều chỉnh mức ưu tiên dựa trên hành vi CPU/I/O của tiến trình",
      "Chỉ chạy tiến trình có PID nhỏ nhất",
      "Không cần quantum"
    ],
    "correct": 1,
    "why": "MLFQ điều chỉnh ưu tiên theo hành vi: dùng hết quantum thường hạ mức.; Tiến trình I/O-bound thường được ưu tiên đáp ứng nhanh; có thể tăng ưu tiên chống starvation.",
    "ref": "Câu hỏi 74",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q18",
    "q": "[C5_Q18] Counting semaphore phù hợp để làm gì?",
    "a": [
      "Đổi tên biến",
      "Chỉ bảo vệ một tài nguyên duy nhất",
      "Xóa tiến trình khỏi hàng đợi",
      "Quản lý nhiều tài nguyên giống nhau có số lượng hữu hạn"
    ],
    "correct": 3,
    "why": "Counting semaphore dùng để quản lý số lượng hữu hạn tài nguyên giống nhau.; Binary semaphore chỉ có 0/1; semaphore cần thao tác nguyên tử.",
    "ref": "Câu hỏi 75",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q04",
    "q": "[C5_Q04] Miền tương trục (critical section) là gì?",
    "a": [
      "Một thư mục hệ thống",
      "Phần giao diện đăng nhập",
      "Một loại thiết bị vào/ra",
      "Đoạn mã truy cập hoặc cập nhật dữ liệu/tài nguyên dùng chung"
    ],
    "correct": 3,
    "why": "Ý chính: Đoạn mã truy cập hoặc cập nhật dữ liệu/tài nguyên dùng chung.; Critical section: đoạn mã truy cập dữ liệu chung; race condition do thứ tự thực thi xen kẽ.",
    "ref": "Câu hỏi 76",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q07",
    "q": "[C4_Q07] Thuật toán FCFS chọn tiến trình theo nguyên tắc nào?",
    "a": [
      "Ưu tiên thấp nhất trước",
      "Đến trước phục vụ trước",
      "Burst time dài nhất trước",
      "Ngẫu nhiên tuyệt đối"
    ],
    "correct": 1,
    "why": "Ý chính: Đến trước phục vụ trước.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Câu hỏi 77",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q22",
    "q": "[C4_Q22] Load balancing trên hệ đa lõi nhằm mục tiêu gì?",
    "a": [
      "Chỉ chạy một tiến trình trên toàn hệ thống",
      "Tắt tất cả lõi phụ",
      "Xóa hàng đợi sẵn sàng",
      "Phân bố tải công việc tương đối đều giữa các lõi CPU"
    ],
    "correct": 3,
    "why": "Ý chính: Phân bố tải công việc tương đối đều giữa các lõi CPU.; FCFS: đến trước chạy trước; SJF: CPU burst ngắn nhất; SRTF: thời gian còn lại ngắn nhất.",
    "ref": "Câu hỏi 78",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q22",
    "q": "[C5_Q22] Bài toán Producer-Consumer cần đồng bộ những gì?",
    "a": [
      "Chỉ xóa consumer",
      "Chỉ đổi tên producer",
      "Chỉ tăng kích thước màn hình",
      "Loại trừ khi truy cập vùng đệm và đếm số ô trống/ô đầy"
    ],
    "correct": 3,
    "why": "Producer-Consumer: mutex bảo vệ buffer, empty đếm ô trống, full đếm ô đầy.; Producer chờ khi buffer đầy; consumer chờ khi buffer rỗng.",
    "ref": "Câu hỏi 79",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q21",
    "q": "[C4_Q21] Lợi ích của processor affinity là gì?",
    "a": [
      "Tận dụng cache tốt hơn và giảm chi phí chuyển lõi",
      "Không cần bộ nhớ cache",
      "Làm mọi tiến trình kết thúc ngay",
      "Loại bỏ hoàn toàn cần định thời"
    ],
    "correct": 0,
    "why": "Processor affinity giữ tiến trình trên lõi quen thuộc để tận dụng cache.; Load balancing phân bố tải giữa các lõi, đôi khi cần di chuyển tiến trình.",
    "ref": "Câu hỏi 80",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q05",
    "q": "[C1_Q05] System call dùng để làm gì?",
    "a": [
      "Tự động sửa lỗi thuật toán",
      "Tăng tốc độ gõ bàn phím",
      "Thay thế hoàn toàn trình biên dịch",
      "Cho phép chương trình người dùng yêu cầu dịch vụ từ hệ điều hành"
    ],
    "correct": 3,
    "why": "Ý chính: Cho phép chương trình người dùng yêu cầu dịch vụ từ hệ điều hành.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Câu hỏi 81",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q15",
    "q": "[C3_Q15] Luồng (thread) là gì?",
    "a": [
      "Một thiết bị nhập dữ liệu",
      "Đơn vị thực thi nhẹ bên trong một tiến trình",
      "Một loại tập tin văn bản",
      "Một thư mục hệ thống"
    ],
    "correct": 1,
    "why": "Thread là đơn vị thực thi trong process; chia sẻ không gian địa chỉ.; Mỗi thread có stack, thanh ghi và bộ đếm chương trình riêng.",
    "ref": "Câu hỏi 82",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q14",
    "q": "[C3_Q14] Tiến trình orphan là tiến trình như thế nào?",
    "a": [
      "Tiến trình không có mã chương trình",
      "Tiến trình đang chạy trong chế độ nhân duy nhất",
      "Tiến trình con còn chạy nhưng tiến trình cha đã kết thúc",
      "Tiến trình không có PID"
    ],
    "correct": 2,
    "why": "Orphan: tiến trình cha kết thúc khi con còn sống; hệ thống nhận nuôi con.; Zombie: con đã kết thúc nhưng cha chưa thu nhận trạng thái.",
    "ref": "Câu hỏi 83",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q09",
    "q": "[C2_Q09] Cấu trúc nguyên khối (monolithic kernel) có đặc điểm nào?",
    "a": [
      "Tất cả dịch vụ chạy trong trình duyệt",
      "Nhiều dịch vụ hệ điều hành chạy trong kernel, hiệu năng cao nhưng kernel lớn",
      "Không có kernel",
      "Chỉ hỗ trợ một tập tin duy nhất"
    ],
    "correct": 1,
    "why": "Monolithic kernel: nhiều dịch vụ chạy ở kernel mode, thường giảm chi phí gọi qua lại.; Microkernel: kernel nhỏ, nhiều dịch vụ ở user mode, tăng cô lập lỗi.",
    "ref": "Câu hỏi 84",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q11",
    "q": "[C1_Q11] Hệ điều hành kiểu batch phù hợp nhất với tình huống nào?",
    "a": [
      "Chơi game tương tác thời gian thực",
      "Vẽ đồ họa bằng bút cảm ứng",
      "Xử lý các công việc theo lô, ít tương tác trực tiếp với người dùng",
      "Họp trực tuyến"
    ],
    "correct": 2,
    "why": "Ý chính: Xử lý các công việc theo lô, ít tương tác trực tiếp với người dùng.; Kernel là phần lõi; user mode bị giới hạn, kernel mode thực thi lệnh đặc quyền.",
    "ref": "Câu hỏi 85",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q18",
    "q": "[C3_Q18] Vì sao đa luồng có thể gây khó khăn?",
    "a": [
      "Vì mọi luồng luôn chạy tuần tự tuyệt đối",
      "Cần đồng bộ khi nhiều luồng truy cập dữ liệu dùng chung",
      "Vì không thể dùng CPU đa lõi",
      "Vì không thể chia sẻ bộ nhớ"
    ],
    "correct": 1,
    "why": "Ý chính: Cần đồng bộ khi nhiều luồng truy cập dữ liệu dùng chung.; fork() tạo con; exec() thay chương trình; wait() thu nhận trạng thái con.",
    "ref": "Câu hỏi 86",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q02",
    "q": "[C5_Q02] Race condition là gì?",
    "a": [
      "Một loại bộ nhớ ảo",
      "Kết quả phụ thuộc vào thứ tự thực thi xen kẽ của các tiến trình/luồng",
      "Một phương pháp nén tập tin",
      "Một thuật toán định thời theo ưu tiên"
    ],
    "correct": 1,
    "why": "Ý chính: Kết quả phụ thuộc vào thứ tự thực thi xen kẽ của các tiến trình/luồng.; Ba yêu cầu: mutual exclusion, progress, bounded waiting.",
    "ref": "Câu hỏi 87",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q14",
    "q": "[C4_Q14] Nếu quantum quá nhỏ trong Round Robin, điều gì dễ xảy ra?",
    "a": [
      "Mọi tiến trình chạy song song tuyệt đối",
      "Tăng số lần chuyển ngữ cảnh",
      "Không còn tiến trình nào chờ",
      "CPU không cần định thời"
    ],
    "correct": 1,
    "why": "Quantum quá nhỏ làm tăng context switch và overhead.; Quantum quá lớn làm RR gần FCFS.",
    "ref": "Câu hỏi 88",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q20",
    "q": "[C4_Q20] Processor affinity có nghĩa là gì?",
    "a": [
      "Xu hướng giữ tiến trình/luồng chạy trên cùng một lõi CPU",
      "Chuyển tiến trình sang ổ cứng",
      "Xóa tiến trình khỏi bộ nhớ",
      "Tắt một lõi CPU vĩnh viễn"
    ],
    "correct": 0,
    "why": "Processor affinity: xu hướng chạy tiến trình/luồng trên cùng CPU/lõi.; Lợi ích: cache locality, giảm chi phí di chuyển giữa các lõi.",
    "ref": "Câu hỏi 89",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q23",
    "q": "[C5_Q23] Trong bài toán Readers-Writers, quy tắc cơ bản là gì?",
    "a": [
      "Writer không bao giờ được ghi",
      "Reader không bao giờ được đọc",
      "Nhiều reader có thể đọc đồng thời, nhưng writer cần quyền truy cập độc quyền",
      "Nhiều writer luôn ghi đồng thời không cần khóa"
    ],
    "correct": 2,
    "why": "Readers-Writers: nhiều reader có thể cùng đọc, writer phải độc quyền.; Thiết kế ưu tiên reader/writer không hợp lý có thể gây starvation.",
    "ref": "Câu hỏi 90",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q13",
    "q": "[C2_Q13] Module kernel giúp ích gì?",
    "a": [
      "Cho phép nạp/gỡ một số chức năng kernel linh hoạt khi cần",
      "Chỉ dùng để vẽ biểu tượng",
      "Làm hệ điều hành mất khả năng mở rộng",
      "Không liên quan đến trình điều khiển thiết bị"
    ],
    "correct": 0,
    "why": "Ý chính: Cho phép nạp/gỡ một số chức năng kernel linh hoạt khi cần.; OS services gồm thực thi chương trình, I/O, quản lý tệp, truyền thông, bảo vệ.",
    "ref": "Câu hỏi 91",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q17",
    "q": "[C3_Q17] Lợi ích của đa luồng là gì?",
    "a": [
      "Loại bỏ nhu cầu đồng bộ hóa",
      "Tăng khả năng đáp ứng và tận dụng CPU đa lõi tốt hơn",
      "Làm mọi lỗi lập trình biến mất",
      "Không cần hệ điều hành quản lý"
    ],
    "correct": 1,
    "why": "Đa luồng cải thiện responsiveness và khả năng tận dụng CPU đa lõi.; Các luồng chia sẻ dữ liệu nên vẫn cần đồng bộ.",
    "ref": "Câu hỏi 92",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q16",
    "q": "[C4_Q16] Starvation trong định thời là gì?",
    "a": [
      "Tiến trình luôn được chọn đầu tiên",
      "Bộ nhớ bị xóa hoàn toàn",
      "Một tiến trình chờ quá lâu vì liên tục không được chọn",
      "CPU bị thiếu điện"
    ],
    "correct": 2,
    "why": "Starvation là tiến trình chờ rất lâu vì liên tục không được chọn.; Aging tăng dần độ ưu tiên của tiến trình chờ lâu.",
    "ref": "Câu hỏi 93",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q02",
    "q": "[C4_Q02] Bộ định thời ngắn hạn (short-term scheduler) chọn tiến trình từ đâu?",
    "a": [
      "Hàng đợi sẵn sàng",
      "Thùng rác",
      "Bộ nhớ ROM",
      "Danh bạ người dùng"
    ],
    "correct": 0,
    "why": "Ý chính: Hàng đợi sẵn sàng.; RR chia thời gian theo quantum; quantum quá nhỏ tăng context switch.",
    "ref": "Câu hỏi 94",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C4_Q09",
    "q": "[C4_Q09] SJF không trưng dụng chọn tiến trình nào?",
    "a": [
      "Tiến trình đến sau cùng",
      "Tiến trình có PID lớn nhất",
      "Tiến trình sẵn sàng có CPU burst ngắn nhất",
      "Tiến trình dùng nhiều bộ nhớ nhất"
    ],
    "correct": 2,
    "why": "SJF không trưng dụng chọn tiến trình ready có CPU burst ngắn nhất.; SRTF là phiên bản có trưng dụng dựa vào thời gian còn lại.",
    "ref": "Câu hỏi 95",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C5_Q20",
    "q": "[C5_Q20] Deadlock là gì?",
    "a": [
      "CPU chạy nhanh hơn bình thường",
      "Tiến trình chờ lâu nhưng cuối cùng luôn được phục vụ ngay",
      "Hai hay nhiều tiến trình chờ nhau vô hạn nên không tiến trình nào tiếp tục được",
      "Bộ nhớ tự động mở rộng"
    ],
    "correct": 2,
    "why": "Deadlock: nhóm tiến trình chờ nhau vô hạn, không thể tiếp tục.; Bốn điều kiện cần: mutual exclusion, hold-and-wait, no preemption, circular wait.",
    "ref": "Câu hỏi 96",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q06",
    "q": "[C2_Q06] System call thuộc nhóm quản lý tập tin thường liên quan đến thao tác nào?",
    "a": [
      "Tăng tốc quạt tản nhiệt",
      "Thay đổi font chữ hệ thống",
      "Điều chỉnh độ sáng màn hình",
      "Mở, đọc, ghi, đóng và xóa tập tin"
    ],
    "correct": 3,
    "why": "Ý chính: Mở, đọc, ghi, đóng và xóa tập tin.; Monolithic: nhiều dịch vụ trong kernel; microkernel: chuyển nhiều dịch vụ sang user space.",
    "ref": "Câu hỏi 97",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C3_Q16",
    "q": "[C3_Q16] Các luồng trong cùng một tiến trình thường chia sẻ gì?",
    "a": [
      "Không gian địa chỉ và tài nguyên của tiến trình",
      "Mỗi luồng luôn có một ổ cứng riêng",
      "Không chia sẻ bất kỳ tài nguyên nào",
      "Mỗi luồng luôn có kernel riêng"
    ],
    "correct": 0,
    "why": "Các luồng cùng process chia sẻ code, data, heap và tệp đang mở.; Mỗi luồng có stack, thanh ghi và program counter riêng.",
    "ref": "Câu hỏi 98",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C1_Q15",
    "q": "[C1_Q15] Khi một chương trình cần đọc tập tin, nó thường phải thông qua cơ chế nào của hệ điều hành?",
    "a": [
      "System call",
      "Thay đổi độ phân giải",
      "Đổi hình nền",
      "Tắt màn hình"
    ],
    "correct": 0,
    "why": "Ý chính: System call.; System call là cách ứng dụng yêu cầu dịch vụ của hệ điều hành.",
    "ref": "Câu hỏi 99",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "source": "notes",
    "sourceName": "He_dieu_hanh_100_cau_dap_an_va_ghi_chu.docx",
    "code": "C2_Q02",
    "q": "[C2_Q02] Dịch vụ nào sau đây thường do hệ điều hành cung cấp?",
    "a": [
      "Thực thi chương trình, thao tác tập tin, vào/ra và truyền thông",
      "Chỉ thiết kế trang web",
      "Chỉ in màu tài liệu",
      "Chỉ chỉnh sửa ảnh"
    ],
    "correct": 0,
    "why": "Ý chính: Thực thi chương trình, thao tác tập tin, vào/ra và truyền thông.; API là giao diện lập trình thuận tiện; system call yêu cầu dịch vụ từ kernel.",
    "ref": "Câu hỏi 100",
    "labels": [
      "a",
      "b",
      "c",
      "d"
    ]
  }
];

